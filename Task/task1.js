//  Task 1: Estrategias de Branching (8 minutos)
// Modelos de branching para diferentes equipos.

// # GitHub Flow - Simple y efectivo
// # Ideal para equipos pequeños y deployments frecuentes

// # 1. main branch siempre deployable
// # 2. Crear branch por feature/bug
// # 3. Push y crear PR
// # 4. Code review y merge

// git checkout -b feature/user-authentication
// git push -u origin feature/user-authentication

// # Crear PR en GitHub
// # Después de aprobación: merge y delete branch
// git checkout main
// git merge feature/user-authentication
// git branch -d feature/user-authentication
// # Git Flow - Más estructurado
// # Ideal para productos con releases planificados

// # Branches principales:
// # - main: código en producción
// # - develop: integración de features

// # Branches de soporte:
// # - feature/*: nuevas funcionalidades
// # - release/*: preparación de releases
// # - hotfix/*: corrección de bugs en producción

// # Ejemplo de flujo:
// git checkout develop
// git checkout -b feature/user-login
// # Desarrollar feature
// git checkout develop
// git merge feature/user-login

// # Crear release
// git checkout -b release/1.0.0
// # Testing y ajustes
// git checkout main
// git merge release/1.0.0
// git tag -a v1.0.0 -m "Release 1.0.0"