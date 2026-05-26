# ============================================================
# Atualizador Automático - JurisPath PRO / Vade Mecum
# ============================================================
# CONFIGURACOES - Edite antes de usar!
# ============================================================
$REPO_OWNER = "SEU_USUARIO"          # Ex: "joaosilva"
$REPO_NAME  = "jurispath-vade-mecum"  # Ex: "jurispath-vade-mecum"
$REPO_BRANCH = "main"                 # Branch com os arquivos atualizados
$GITHUB_RAW = "https://raw.githubusercontent.com/$REPO_OWNER/$REPO_NAME/$REPO_BRANCH"

$PROJECT_DIR = Split-Path -Parent $MyInvocation.MyCommand.Path
$BACKUP_DIR  = Join-Path $PROJECT_DIR "backups"

$FILES_TO_UPDATE = @(
    "JurisPath.html",
    "vade.js",
    "dados/artigos.js",
    "dados/livros.js",
    "dados/videos.js",
    "dados/documentos.js",
    "dados/jurisprudencia.js",
    "dados/questoes.js"
)

$ErrorActionPreference = "Stop"

# ============================================================
# FUNCOES
# ============================================================
function Escrever {
    param([string]$texto, [string]$cor = "White")
    Write-Host $texto -ForegroundColor $cor
}

function VersaoLocal {
    $verPath = Join-Path $PROJECT_DIR "version.json"
    if (Test-Path $verPath) {
        try {
            $json = Get-Content $verPath -Raw -Encoding UTF8 | ConvertFrom-Json
            return $json.version
        } catch { return "0.0.0" }
    }
    return "0.0.0"
}

function VersaoRemota {
    try {
        $url = "$GITHUB_RAW/version.json"
        $json = Invoke-RestMethod -Uri $url -TimeoutSec 15
        return $json.version
    } catch {
        return $null
    }
}

function CompararVersao {
    param([string]$v1, [string]$v2)
    $p1 = $v1.Split('.') | ForEach-Object { [int]$_ }
    $p2 = $v2.Split('.') | ForEach-Object { [int]$_ }
    for ($i = 0; $i -lt [Math]::Max($p1.Length, $p2.Length); $i++) {
        $a = if ($i -lt $p1.Length) { $p1[$i] } else { 0 }
        $b = if ($i -lt $p2.Length) { $p2[$i] } else { 0 }
        if ($a -gt $b) { return 1 }
        if ($a -lt $b) { return -1 }
    }
    return 0
}

function FazerBackup {
    param([string[]]$arquivos)
    $timestamp = Get-Date -Format "yyyyMMdd_HHmmss"
    $dirBackup = Join-Path $BACKUP_DIR "v$timestamp"
    New-Item -ItemType Directory -Path $dirBackup -Force | Out-Null
    foreach ($arquivo in $arquivos) {
        $origem = Join-Path $PROJECT_DIR $arquivo
        if (Test-Path $origem) {
            $destino = Join-Path $dirBackup $arquivo
            $destinoDir = Split-Path $destino -Parent
            if (-not (Test-Path $destinoDir)) {
                New-Item -ItemType Directory -Path $destinoDir -Force | Out-Null
            }
            Copy-Item -LiteralPath $origem -Destination $destino -Force
        }
    }
    Escrever "  Backup criado em: $dirBackup" -cor "Green"
    return $dirBackup
}

function BaixarArquivo {
    param([string]$arquivo)
    $url = "$GITHUB_RAW/$arquivo"
    $destino = Join-Path $PROJECT_DIR $arquivo
    $destinoDir = Split-Path $destino -Parent
    if (-not (Test-Path $destinoDir)) {
        New-Item -ItemType Directory -Path $destinoDir -Force | Out-Null
    }
    Escrever "  Baixando: $arquivo ..." -cor "Yellow"
    try {
        Invoke-RestMethod -Uri $url -TimeoutSec 60 -OutFile $destino
        Escrever "    OK" -cor "Green"
        return $true
    } catch {
        Escrever "    FALHOU: $_" -cor "Red"
        return $false
    }
}

function VerificarConexao {
    try {
        $req = [System.Net.WebRequest]::Create("https://raw.githubusercontent.com")
        $req.Timeout = 5000
        $req.GetResponse() | Out-Null
        return $true
    } catch {
        return $false
    }
}

# ============================================================
# MAIN
# ============================================================
Clear-Host
Escrever "========================================" -cor "Cyan"
Escrever "  JurisPath PRO - Atualizador Automatico" -cor "Cyan"
Escrever "========================================" -cor "Cyan"
Escrever ""

# Verificar conexao
Escrever "[1/5] Verificando conexao com internet..." -cor "Yellow"
if (-not (VerificarConexao)) {
    Escrever "  SEM CONEXAO. Verifique sua internet." -cor "Red"
    Pause
    exit 1
}
Escrever "  Conectado!" -cor "Green"
Escrever "  Repositorio: $REPO_OWNER/$REPO_NAME ($REPO_BRANCH)" -cor "White"
Escrever ""

# Checar versao remota
Escrever "[2/5] Verificando versao remota..." -cor "Yellow"
$versaoRemota = VersaoRemota
if (-not $versaoRemota) {
    Escrever "  ERRO: Nao foi possivel obter a versao remota." -cor "Red"
    Escrever "  Verifique se o arquivo version.json existe no repositorio." -cor "Red"
    Pause
    exit 1
}
Escrever "  Versao remota: v$versaoRemota" -cor "Green"
Escrever ""

# Comparar versoes
Escrever "[3/5] Comparando versoes..." -cor "Yellow"
$versaoLocal = VersaoLocal
Escrever "  Versao local:  v$versaoLocal" -cor "White"

$comparacao = CompararVersao $versaoRemota $versaoLocal
if ($comparacao -le 0) {
    Escrever "  Seu JurisPath ja esta atualizado! (v$versaoLocal)" -cor "Green"
    Escrever ""
    Escrever "Nao ha atualizacoes disponiveis." -cor "Cyan"
    Pause
    exit 0
}

Escrever "  NOVA VERSAO DISPONIVEL: v$versaoRemota" -cor "Magenta"
Escrever ""

# Backup
Escrever "[4/5] Criando backup dos arquivos atuais..." -cor "Yellow"
$backupPath = FazerBackup -arquivos $FILES_TO_UPDATE
Escrever ""

# Atualizar
Escrever "[5/5] Atualizando arquivos..." -cor "Yellow"
$falhas = 0
foreach ($arquivo in $FILES_TO_UPDATE) {
    if (-not (BaixarArquivo $arquivo)) {
        $falhas++
    }
}

# Baixar version.json tambem
BaixarArquivo "version.json" | Out-Null

Escrever ""
if ($falhas -eq 0) {
    Escrever "========================================" -cor "Cyan"
    Escrever "  ATUALIZACAO CONCLUIDA COM SUCESSO!" -cor "Cyan"
    Escrever "  Versao local agora: v$versaoRemota" -cor "Green"
    Escrever "========================================" -cor "Cyan"
    Escrever ""
    Escrever "Alteracoes importantes podem exigir que voce" -cor "Yellow"
    Escrever "feche e reabra o JurisPath no navegador." -cor "Yellow"
} else {
    Escrever "  ATUALIZACAO PARCIAL ($falhas falha(s))." -cor "Yellow"
    Escrever "  Tente novamente ou restaure o backup em:" -cor "Yellow"
    Escrever "  $backupPath" -cor "Yellow"
}

Escrever ""
Pause
