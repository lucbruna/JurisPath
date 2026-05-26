# ============================================================
# Instalador JurisPath PRO
# ============================================================
$ErrorActionPreference = "Stop"
$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$desktop = [Environment]::GetFolderPath("Desktop")
$htmlFile = Join-Path $projectDir "JurisPath.html"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  JurisPath PRO - Instalador" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

# 1. Verificar arquivos principais
Write-Host "[1/4] Verificando arquivos..." -ForegroundColor Yellow
$required = @(
    "JurisPath.html",
    "vade.js",
    "version.json",
    "atualizar.ps1",
    "dados/livros.js",
    "dados/videos.js",
    "dados/documentos.js",
    "dados/artigos.js",
    "dados/jurisprudencia.js"
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
    Write-Host "`nAVISO: $($missing.Count) arquivo(s) faltando. O sistema pode não funcionar completo." -ForegroundColor Red
} else {
    Write-Host "  Todos os arquivos OK!" -ForegroundColor Green
}

# 2. Contar documentos
Write-Host "[2/4] Indexando documentos..." -ForegroundColor Yellow
$totalDocs = (Get-ChildItem -LiteralPath (Join-Path $projectDir "dados") -Include *.pdf,*.PDF,*.pptx,*.ppt,*.mobi -Recurse).Count
$totalVideos = (Get-ChildItem -LiteralPath (Join-Path $projectDir "dados") -Filter *.mp4 -Recurse).Count
Write-Host "  $totalDocs documentos PDF" -ForegroundColor Green
Write-Host "  $totalVideos vídeos MP4" -ForegroundColor Green

# 3. Criar atalho no Desktop
Write-Host "[3/4] Criando atalho no Desktop..." -ForegroundColor Yellow
$shortcutPath = Join-Path $desktop "JurisPath PRO.url"
$shortcutContent = @"
[InternetShortcut]
URL=file:///$($htmlFile.Replace('\','/'))
IconIndex=0
"@
try {
    Set-Content -Path $shortcutPath -Value $shortcutContent -Encoding UTF8
    Write-Host "  Atalho criado em: $shortcutPath" -ForegroundColor Green
} catch {
    Write-Host "  Erro ao criar atalho: $_" -ForegroundColor Red
}

# 4. Criar script de abertura com servidor local (opcional)
Write-Host "[4/4] Criando launcher..." -ForegroundColor Yellow
$launcherPath = Join-Path $projectDir "jurispath.bat"
$batContent = @"
@echo off
title JurisPath PRO
start "" "$htmlFile"
echo JurisPath PRO foi aberto no seu navegador padrao.
"@
try {
    Set-Content -Path $launcherPath -Value $batContent -Encoding ASCII
    Write-Host "  Launcher criado: $launcherPath" -ForegroundColor Green
} catch {
    Write-Host "  Erro ao criar launcher: $_" -ForegroundColor Red
}

Write-Host ""
Write-Host "========================================" -ForegroundColor Cyan
Write-Host "  Instalação concluída!" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "Para abrir o JurisPath:" -ForegroundColor White
Write-Host "  1. Atalho no Desktop: JurisPath PRO" -ForegroundColor Green
Write-Host "  2. Arquivo: jurispath.bat" -ForegroundColor Green
Write-Host "  3. Direto: JurisPath.html" -ForegroundColor Green
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
