[Setup]
AppName=JurisPath PRO - Vade Mecum
AppVersion=3.0
AppId={{A1B2C3D4-E5F6-7890-ABCD-EF1234567890}
DefaultDirName={autopf}\JurisPath PRO
OutputDir=Output
OutputBaseFilename=JurisPath_PRO_Setup_v3
AppPublisher=JurisPath
AppPublisherURL=https://github.com/lucbruna/JurisPath
AppSupportURL=https://github.com/lucbruna/JurisPath/issues
AppUpdatesURL=https://github.com/lucbruna/JurisPath/releases
AppReadmeUrl=https://github.com/lucbruna/JurisPath#readme
SetupIconFile=icon.ico
Compression=lzma2/fast
DiskSpanning=yes
DiskSliceSize=max
PrivilegesRequired=admin
WizardStyle=modern
UninstallDisplayIcon={app}\icon.ico
UninstallDisplayName=JurisPath PRO v3.0
VersionInfoVersion=3.0.0.0
VersionInfoCompany=JurisPath
VersionInfoDescription=JurisPath PRO - Vade Mecum + CF/88 + Material 2026 + Sync Gist
VersionInfoProductName=JurisPath PRO
VersionInfoProductVersion=3.0.0.0
MinVersion=10.0
ArchitecturesAllowed=x64compatible
ArchitecturesInstallIn64BitMode=x64compatible

[Languages]
Name: "brazilianportuguese"; MessagesFile: "compiler:Languages\BrazilianPortuguese.isl"

[CustomMessages]
pt_BR_CreateDesktopIcon=Criar atalho no &Desktop
pt_BR_LaunchAfterInstall=Abrir JurisPath apos a instalacao
pt_BR_CheckUpdates=Buscar atualizacoes do GitHub apos instalar

[Files]
Source: "JurisPath.html"; DestDir: "{app}"; Flags: ignoreversion
Source: "vade.js"; DestDir: "{app}"; Flags: ignoreversion
Source: "version.json"; DestDir: "{app}"; Flags: ignoreversion
Source: "atualizar.ps1"; DestDir: "{app}"; Flags: ignoreversion
Source: "instalar.ps1"; DestDir: "{app}"; Flags: ignoreversion
Source: "jurispath.bat"; DestDir: "{app}"; Flags: ignoreversion
Source: "test_artigos.js"; DestDir: "{app}"; Flags: ignoreversion
Source: "license.txt"; DestDir: "{app}"; Flags: ignoreversion
Source: "README.txt"; DestDir: "{app}"; Flags: ignoreversion
Source: "data.js"; DestDir: "{app}"; Flags: ignoreversion
Source: "src\data\lawSubjects.json"; DestDir: "{app}\src\data"; Flags: ignoreversion
Source: "icon.ico"; DestDir: "{app}"; Flags: ignoreversion
Source: "dados\*"; DestDir: "{app}\dados"; Flags: ignoreversion recursesubdirs

[Icons]
Name: "{commondesktop}\JurisPath PRO v3.0"; Filename: "{app}\JurisPath.html"; IconFilename: "{app}\icon.ico"; Comment: "Abrir JurisPath PRO v3.0 no navegador"
Name: "{commondesktop}\JurisPath PRO (Atualizar)"; Filename: "powershell.exe"; Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\atualizar.ps1"""; WorkingDir: "{app}"; IconFilename: "{app}\icon.ico"; Comment: "Verificar e instalar atualizacoes do GitHub"
Name: "{commondesktop}\JurisPath PRO (Sincronizar)"; Filename: "{app}\JurisPath.html#sync"; IconFilename: "{app}\icon.ico"; Comment: "Sincronizar entre dispositivos via GitHub Gist"
Name: "{group}\JurisPath PRO v3.0"; Filename: "{app}\JurisPath.html"; IconFilename: "{app}\icon.ico"
Name: "{group}\Buscar Atualizacoes"; Filename: "powershell.exe"; Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\atualizar.ps1"""; WorkingDir: "{app}"
Name: "{group}\Reinstalar / Reparar"; Filename: "powershell.exe"; Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\instalar.ps1"""; WorkingDir: "{app}"
Name: "{group}\Desinstalar"; Filename: "{uninstallexe}"; IconFilename: "{app}\icon.ico"
Name: "{group}\Site Oficial JurisPath"; Filename: "https://github.com/lucbruna/JurisPath"

[Run]
Filename: "powershell.exe"; Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\atualizar.ps1"""; WorkingDir: "{app}"; Description: "Buscar atualizacoes do GitHub (recomendado)"; Flags: postinstall nowait runhidden skipifsilent unchecked
Filename: "{app}\JurisPath.html"; Description: "Abrir JurisPath PRO v3.0"; Flags: postinstall nowait shellexec

[UninstallDelete]
Type: filesandordirs; Name: "{app}\backups"
Type: filesandordirs; Name: "{app}\Output"

[Messages]
BeveledLabel=JurisPath PRO v3.0 - Vade Mecum + CF/88 + Agenda + Notas + Mapa Mental + Material 2026 + Sync Gist
SetupWindowTitle=Instalador JurisPath PRO v3.0

[Code]
function NeedsAddPath(Param: string): Boolean;
var
  OrigPath: string;
begin
  if not RegQueryStringValue(HKEY_CURRENT_USER,
    'Environment', 'Path', OrigPath)
  then begin
    Result := True;
    exit;
  end;
  Result := Pos(';' + UpperCase(Param) + ';', ';' + Uppercase(OrigPath) + ';') = 0;
end;

