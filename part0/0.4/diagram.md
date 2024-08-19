```mermaid
sequenceDiagram
    participant Navegador
    participant Server

    Navegador->>Server: Request de recurso (HTTP GET)
    Server-->>Navegador: Respuesta con contenido (HTTP 200)
    Navegador->>Server: Enviar datos del formulario (HTTP POST)
    Server-->>Navegador: Confirmación de recepción (HTTP 201)