[Setup]
AppName=JurisPath PRO - Vade Mecum
AppVersion=2.0
DefaultDirName={autopf}\JurisPath PRO
OutputDir=Output
OutputBaseFilename=JurisPath_PRO_Setup
AppPublisher=JurisPath
AppPublisherURL=https://github.com/SEU_USUARIO/jurispath-vade-mecum

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
Source: "dados\*"; DestDir: "{app}\dados"; Flags: ignoreversion recursesubdirs

[Icons]
Name: "{commondesktop}\JurisPath PRO"; Filename: "{app}\JurisPath.html"
Name: "{commondesktop}\JurisPath PRO (Atualizar)"; Filename: "powershell.exe"; Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\atualizar.ps1"""; WorkingDir: "{app}"
Name: "{group}\JurisPath PRO"; Filename: "{app}\JurisPath.html"
Name: "{group}\Atualizar JurisPath"; Filename: "powershell.exe"; Parameters: "-NoProfile -ExecutionPolicy Bypass -File ""{app}\atualizar.ps1"""; WorkingDir: "{app}"

[Run]
Filename: "{app}\JurisPath.html"; Description: "Abrir JurisPath PRO"; Flags: postinstall nowait shellexec
