```mermaid

sequenceDiagram
    participant Navegador
    participant Servidor    

    Navegador->>Servidor: HTTP POST https://studies.cs.helsinki.fi/exampleapp/new_note
    activate Serividor
    Servidor-->>Navegador: HTTP 302 GET https://studies.cs.helsinki.fi/exampleapp/notes
    desactivate Servidor

    Navegador->>Servidor: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.css
    Navegador->>Servidor: HTTP GET https://studies.cs.helsinki.fi/exampleapp/main.js
    Navegador->>Servidor: HTTP GET data.json