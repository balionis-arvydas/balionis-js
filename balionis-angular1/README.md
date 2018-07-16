# Why?

This package is meant to provide me with the prototype of angular 6 with spring boot (web).

This package has LoggerService and ConfigService prototypes;

# How?

## Setup

```
gradle ngClean
gradle ngInstall
```

## Compile

```
gradle clean test bootJar
```

_Note: the artifact should be produced at balionis-angular1\build\libs\balionis-angular1-1.0-SNAPSHOT.jar_

## Publish

```
gradle install
```

_Note: If LOCAL_MAVEN_REPOSITORY at gradle.properties is left unchanged then the artifact should be produced at C:\share\repository\com\balionis\balionis-angular1\1.0-SNAPSHOT_

## Run

```
>RUNME.cmd 8090
// or> gradle run -Dprofile=prod -Dexec.args="--server.port=8090"
```

_Note: If all goes well then the command line output should look like this_
```
>RUNME.bat 8090

  .   ____          _            __ _ _
 /\\ / ___'_ __ _ _(_)_ __  __ _ \ \ \ \
( ( )\___ | '_ | '_| | '_ \/ _` | \ \ \ \
 \\/  ___)| |_)| | | | | || (_| |  ) ) ) )
  '  |____| .__|_| |_|_| |_\__, | / / / /
 =========|_|==============|___/=/_/_/_/
 :: Spring Boot ::        (v2.0.1.RELEASE)

16:54:41.448 TKD [main] INFO  c.b.angular1.restful.AppRunner - Starting AppRunner on DESKTOP-EA31FOQ with PID 9660 (.\balionis-angular1\build\libs\balionis-angular1-1.0-SNAPSHOT.jar started by arvydas in .\balionis-angular\balionis-angular1)
16:54:41.464 TKD [main] DEBUG c.b.angular1.restful.AppRunner - Running with Spring Boot v2.0.1.RELEASE, Spring v5.0.5.RELEASE
16:54:41.464 TKD [main] INFO  c.b.angular1.restful.AppRunner - The following profiles are active: prod
16:54:45.104 TKD [main] INFO  c.b.angular1.restful.AppRunner - Started AppRunner in 4.254 seconds (JVM running for 5.026)
16:56:29.871 TKD [http-nio-8090-exec-3] DEBUG c.b.angular1.restful.AppController - getConfig: filename=application-config-prod.json
16:56:29.886 TKD [http-nio-8090-exec-3] DEBUG c.b.angular1.restful.AppController - getConfig: res={
  "apiUrl":"http://${apiHostname}:${apiPort}/api"
}
```

## Test

* Open http://localhost:8090
<...>