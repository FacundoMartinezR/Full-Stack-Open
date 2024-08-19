```mermaid
graph TD;
  A[Inicio] --> B{¿Decision?};
  B -->|Sí| C[Acción 1];
  B -->|No| D[Acción 2];
  C --> E[Fin];
  D --> E;
