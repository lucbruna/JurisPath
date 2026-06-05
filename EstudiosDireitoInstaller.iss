[Setup]
AppName=JurisPath PRO - Vade Mecum
AppVersion=2.1
DefaultDirName={autopf}\JurisPath PRO
OutputDir=Output
OutputBaseFilename=JurisPath_PRO_Setup
AppPublisher=JurisPath
AppPublisherURL=https://github.com/lucbruna/JurisPath
SetupIconFile=icon.ico
Compression=lzma2/fast
DiskSpanning=yes
DiskSliceSize=max
PrivilegesRequired=admin
WizardStyle=modern

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
Name: "{commondesktop}\JurisPath PRO"; Filename: "{app}\JurisPath.html"; IconFilename: "{app}\icon.ico"; Comment: "Abrir JurisPath PRO no navegador"
Name: "{commondesktop}\JurisPath PRO (Atualizar)"; Filename: "powershell.exe"; Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\atualizar.ps1"""; WorkingDir: "{app}"; IconFilename: "{app}\icon.ico"; Comment: "Verificar e instalar atualizacoes do GitHub"
Name: "{group}\JurisPath PRO"; Filename: "{app}\JurisPath.html"; IconFilename: "{app}\icon.ico"
Name: "{group}\Atualizar JurisPath"; Filename: "powershell.exe"; Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\atualizar.ps1"""; WorkingDir: "{app}"
Name: "{group}\Reinstalar / Repararar"; Filename: "powershell.exe"; Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\instalar.ps1"""; WorkingDir: "{app}"

[Run]
Filename: "powershell.exe"; Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\atualizar.ps1"""; WorkingDir: "{app}"; Description: "Buscar atualizacoes (recomendado)"; Flags: postinstall nowait runhidden skipifsilent unchecked
Filename: "{app}\JurisPath.html"; Description: "Abrir JurisPath PRO"; Flags: postinstall nowait shellexec

[UninstallDelete]
Type: filesandordirs; Name: "{app}\backups"
