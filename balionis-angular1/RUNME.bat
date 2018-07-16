@rem 
@echo off 

setlocal

set CURDIR=%CD%
set CURVER="1.0-SNAPSHOT"
set PORT=%1

IF NOT "%PORT%" == "" goto HAS_PORT
set PORT=9090
echo INFO: using default port [%PORT%]

:HAS_PORT

if "%JAVA_HOME%" == "" (
   echo ERROR: JAVA_HOME not found
   goto :EOF
)

IF NOT EXIST "%JAVA_HOME%\bin\java.exe" (
   echo ERROR: JAVA_HOME not found
   goto :EOF
)

set EXEJAR="%CURDIR%\build\libs\balionis-angular1-%CURVER%.jar"

IF NOT EXIST "%EXEJAR%" (
   echo ERROR: %EXEJAR% not found. Have you run gradle bootJar?
   goto :EOF
)

"%JAVA_HOME%/bin/java.exe" -Dspring.profiles.active=prod -jar "%EXEJAR%" --server.port=%PORT%

set STATUS=%ERRORLEVEL%

IF /I "%STATUS%" NEQ "0" (
    echo ERROR: java failed with %STATUS%
)