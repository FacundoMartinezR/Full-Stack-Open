```mermaid

sequenceDiagram
    participant Navegador
    participant Servidor    

    Navegador->>Servidor: HTTP GET 304 https://studies.cs.helsinki.fi/exampleapp/spa
    Navegador->>Servidor: HTTP GET 304 https://studies.cs.helsinki.fi/exampleapp/main.css
    Navegador->>Servidor: HTTP GET 304 https://studies.cs.helsinki.fi/exampleapp/spa.js
    Navegador->>Servidor: HTTP GET 200 https://studies.cs.helsinki.fi/exampleapp/data.json