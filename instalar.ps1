# ============================================================
# Instalador JurisPath PRO v3.0
# ============================================================
$ErrorActionPreference = "Stop"
$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$desktop = [Environment]::GetFolderPath("Desktop")
$htmlFile = Join-Path $projectDir "JurisPath.html"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  JurisPath PRO v3.0 - Instalador" -ForegroundColor Cyan
Write-Host "  CF/88 + Agenda + Notas + Material 2026 + Sync Gist" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Verificar arquivos principais
Write-Host "[1/6] Verificando arquivos..." -ForegroundColor Yellow
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
Write-Host "[2/6] Indexando documentos..." -ForegroundColor Yellow
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
Write-Host "[3/6] Criando atalho no Desktop..." -ForegroundColor Yellow
$shortcutPath = Join-Path $desktop "JurisPath PRO v3.0.url"
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
Write-Host "[4/6] Criando launcher v3.0..." -ForegroundColor Yellow
$launcherPath = Join-Path $projectDir "jurispath.bat"
$batContent = @"
@echo off
title JurisPath PRO v3.0
cd /d "%~dp0"
start "" "%~dp0JurisPath.html"
echo JurisPath PRO v3.0 foi aberto no seu navegador padrao.
echo.
echo ============================== NOVIDADES v3.0 ==============================
echo  📜 Constituicao Federal completa e atualizada 2026 (200+ artigos)
echo  📝 Notas coloridas (8 cores: amarelo, verde, azul, vermelho, roxo...)
echo  📝 Anotacao rapida em qualquer pagina (botao lateral + Ctrl+Shift+N)
echo  📋 Painel de notas e agenda no dashboard
echo  📅 Agenda avancada (evento unico / em massa / recorrente / plano de estudo)
echo  🎨 Lembretes com cores personalizadas
echo  🎓 Material 2026 - 14 areas completas do Direito
echo  🔄 Sincronizacao entre dispositivos via GitHub Gist
echo  🧠 Mapa mental melhorado para estudantes de direito
echo ===========================================================================
echo.
echo Atalhos: 0=Painel, 1-9=Semestres, V=Vade Mecum, A=Agenda, N=Notas, C=CF/88
echo Botao flutuante 📝 (verde) abre o Bloco de Notas em qualquer pagina.
echo Botao 📅+ (laranja) abre a Agenda Avancada em qualquer pagina.
echo Botao 🔔 (amarelo) configura os lembretes.
echo Botao 🔄 (roxo) sincroniza com GitHub Gist entre dispositivos.
echo Botao 🔄 no topo verifica atualizacoes no GitHub.
"@
try {
    Set-Content -Path $launcherPath -Value $batContent -Encoding ASCII
    Write-Host "  Launcher criado: $launcherPath" -ForegroundColor Green
} catch {
    Write-Host "  Erro ao criar launcher: $_" -ForegroundColor Red
}

# 5. Tentar baixar atualizacoes
Write-Host "[5/6] Verificando atualizacoes do GitHub..." -ForegroundColor Yellow
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

# 6. Verificar Gist sync config
Write-Host "[6/6] Verificando configuracao de sincronizacao GitHub Gist..." -ForegroundColor Yellow
Write-Host "  Para sincronizar notas/agenda entre dispositivos:" -ForegroundColor White
Write-Host "  1. Crie um Personal Access Token em: https://github.com/settings/tokens/new" -ForegroundColor White
Write-Host "  2. Selecione APENAS o escopo 'gist'" -ForegroundColor White
Write-Host "  3. No JurisPath, clique no botao 🔄 (roxo) na lateral e cole o token" -ForegroundColor White
Write-Host ""

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Instalacao concluida! (v3.0)" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Para abrir o JurisPath:" -ForegroundColor White
Write-Host "  1. Atalho no Desktop: JurisPath PRO v3.0" -ForegroundColor Green
Write-Host "  2. Arquivo: jurispath.bat" -ForegroundColor Green
Write-Host "  3. Direto: JurisPath.html" -ForegroundColor Green
Write-Host ""
Write-Host "Novidades da v3.0:" -ForegroundColor White
Write-Host "  - Constituicao Federal completa e atualizada 2026 (200+ artigos)" -ForegroundColor Green
Write-Host "  - Notas coloridas (8 cores personalizadas)" -ForegroundColor Green
Write-Host "  - Anotacao rapida em qualquer pagina (Ctrl+Shift+N)" -ForegroundColor Green
Write-Host "  - Painel de notas e agenda no dashboard" -ForegroundColor Green
Write-Host "  - Agenda avancada (unico / em massa / recorrente / plano de estudo)" -ForegroundColor Green
Write-Host "  - Lembretes com cores personalizadas" -ForegroundColor Green
Write-Host "  - Material 2026 - 14 areas completas do Direito" -ForegroundColor Green
Write-Host "  - Sincronizacao entre dispositivos via GitHub Gist" -ForegroundColor Green
Write-Host "  - Mapa mental melhorado para estudantes" -ForegroundColor Green
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
