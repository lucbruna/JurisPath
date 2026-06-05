# ============================================================
# Instalador JurisPath PRO v2.1
# ============================================================
$ErrorActionPreference = "Stop"
$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$desktop = [Environment]::GetFolderPath("Desktop")
$htmlFile = Join-Path $projectDir "JurisPath.html"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  JurisPath PRO v2.1 - Instalador" -ForegroundColor Cyan
Write-Host "  CF/88 + Agenda + Notas + Vade Mecum" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Verificar arquivos principais
Write-Host "[1/5] Verificando arquivos..." -ForegroundColor Yellow
$required = @(
    "JurisPath.html",
    "vade.js",
    "data.js",
    "version.json",
    "atualizar.ps1",
    "src/data/lawSubjects.json",
    "dados/livros.js",
    "dados/videos.js",
    "dados/documentos.js",
    "dados/artigos.js",
    "dados/jurisprudencia.js",
    "dados/questoes.js"
)
$missing = @()
foreach ($f in $required) {
    $path = Join-Path $projectDir $f
    if (-not (Test-Path -LiteralPath $path)) {
        $missing += $f
        Write-Host "  [FALTA] $f" -ForegroundColor Red
    } else {
        Write-Host "  [OK] $f" -ForegroundColor Green
    }
}
if ($missing.Count -gt 0) {
    Write-Host "`nAVISO: $($missing.Count) arquivo(s) faltando. Execute 'atualizar.ps1' para baixar do GitHub." -ForegroundColor Yellow
} else {
    Write-Host "  Todos os arquivos OK!" -ForegroundColor Green
}

# 2. Contar documentos
Write-Host "[2/5] Indexando documentos..." -ForegroundColor Yellow
$dadosPath = Join-Path $projectDir "dados"
if (Test-Path -LiteralPath $dadosPath) {
    $totalDocs = (Get-ChildItem -LiteralPath $dadosPath -Include *.pdf,*.PDF,*.pptx,*.ppt,*.mobi -Recurse).Count
    $totalVideos = (Get-ChildItem -LiteralPath $dadosPath -Filter *.mp4 -Recurse).Count
    Write-Host "  $totalDocs documentos PDF/PPTX/MOBI" -ForegroundColor Green
    Write-Host "  $totalVideos videos MP4" -ForegroundColor Green
} else {
    Write-Host "  Pasta dados/ nao encontrada." -ForegroundColor Yellow
}

# 3. Criar atalho no Desktop
Write-Host "[3/5] Criando atalho no Desktop..." -ForegroundColor Yellow
$shortcutPath = Join-Path $desktop "JurisPath PRO.url"
$shortcutContent = @"
[InternetShortcut]
URL=file:///$($htmlFile.Replace('\','/'))
IconIndex=0
IconFile=$($projectDir.Replace('\','/'))/icon.ico
"@
try {
    Set-Content -Path $shortcutPath -Value $shortcutContent -Encoding UTF8
    Write-Host "  Atalho criado em: $shortcutPath" -ForegroundColor Green
} catch {
    Write-Host "  Erro ao criar atalho: $_" -ForegroundColor Red
}

# 4. Criar script de abertura
Write-Host "[4/5] Criando launcher..." -ForegroundColor Yellow
$launcherPath = Join-Path $projectDir "jurispath.bat"
$batContent = @"
@echo off
title JurisPath PRO
cd /d "%~dp0"
start "" "%~dp0JurisPath.html"
echo JurisPath PRO foi aberto no seu navegador padrao.
echo.
echo Novidades v2.1: CF/88 atalho + Agenda Profissional + Bloco de Notas universal!
"@
try {
    Set-Content -Path $launcherPath -Value $batContent -Encoding ASCII
    Write-Host "  Launcher criado: $launcherPath" -ForegroundColor Green
} catch {
    Write-Host "  Erro ao criar launcher: $_" -ForegroundColor Red
}

# 5. Tentar baixar atualizacoes
Write-Host "[5/5] Verificando atualizacoes do GitHub..." -ForegroundColor Yellow
try {
    $atualizarPs1 = Join-Path $projectDir "atualizar.ps1"
    if (Test-Path -LiteralPath $atualizarPs1) {
        $url = "https://raw.githubusercontent.com/lucbruna/JurisPath/main/version.json"
        $remoto = Invoke-RestMethod -Uri $url -TimeoutSec 10 -ErrorAction Stop
        $local = (Get-Content (Join-Path $projectDir "version.json") -Raw | ConvertFrom-Json).version
        Write-Host "  Versao local: v$local" -ForegroundColor White
        Write-Host "  Versao remota: v$($remoto.version)" -ForegroundColor White
        if ($remoto.version -ne $local) {
            Write-Host "  NOVA VERSAO disponivel! Execute 'atualizar.ps1' para instalar." -ForegroundColor Magenta
        } else {
            Write-Host "  Voce esta na versao mais recente!" -ForegroundColor Green
        }
    }
} catch {
    Write-Host "  Sem internet ou erro ao verificar: $_" -ForegroundColor Yellow
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Instalacao concluida!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Para abrir o JurisPath:" -ForegroundColor White
Write-Host "  1. Atalho no Desktop: JurisPath PRO" -ForegroundColor Green
Write-Host "  2. Arquivo: jurispath.bat" -ForegroundColor Green
Write-Host "  3. Direto: JurisPath.html" -ForegroundColor Green
Write-Host ""
Write-Host "Recursos da v2.1:" -ForegroundColor White
Write-Host "  - Atalho direto CF/88 (Constituicao Federal completa)" -ForegroundColor Green
Write-Host "  - Agenda Profissional (audiencias, prazos, reunioes, estudos)" -ForegroundColor Green
Write-Host "  - Bloco de Notas universal (interligado, em todas as paginas)" -ForegroundColor Green
Write-Host "  - Atualizacao automatica via GitHub" -ForegroundColor Green
Write-Host ""
Write-Host "Para atualizar:" -ForegroundColor White
Write-Host "  - Clique no botao 🔄 dentro do JurisPath" -ForegroundColor Green
Write-Host "  - Ou execute: atualizar.ps1" -ForegroundColor Green
Write-Host ""

$answer = Read-Host "Deseja abrir o JurisPath agora? (S/N)"
if ($answer -eq "S" -or $answer -eq "s") {
    Start-Process $htmlFile
    Write-Host "Abrindo JurisPath..." -ForegroundColor Cyan
}
