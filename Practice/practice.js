// Practical exercise to apply the concepts learned.
// Workflow completo de desarrollo:

// # 1. Configurar repositorio
// git init
// git remote add origin https://github.com/user/project.git

// # 2. Crear branches principales
// git checkout -b develop
// git push -u origin develop

// # 3. Workflow diario
// # Crear feature branch
// git checkout develop
// git pull origin develop
// git checkout -b feature/user-profile

// # Desarrollar y commit
// git add .
// git commit -m "feat: add user profile component"

// # Push y crear PR
// git push -u origin feature/user-profile

// # Después de merge
// git checkout develop
// git pull origin develop
// git branch -d feature/user-profile

// # 4. Preparar release
// git checkout -b release/1.0.0 develop

// # Testing y ajustes
// npm version minor
// git commit -am "Bump version to 1.0.0"

// # Merge a main
// git checkout main
// git merge release/1.0.0
// git push origin main

// # Crear tag y push
// git tag -a v1.0.0 -m "Release 1.0.0"
// git push origin v1.0.0

// # Merge de vuelta a develop
// git checkout develop
// git merge release/1.0.0
// git push origin develop

// # Limpiar
// git branch -d release/1.0.0
// # .github/workflows/release.yml
// name: Release

// on:
//   push:
//     tags:
//       - 'v*'

// jobs:
//   release:
//     runs-on: ubuntu-latest

//     steps:
//     - uses: actions/checkout@v3

//     - name: Setup Node.js
//       uses: actions/setup-node@v3
//       with:
//         node-version: '18'
//         registry-url: 'https://registry.npmjs.org'

//     - name: Install dependencies
//       run: npm ci

//     - name: Run tests
//       run: npm test

//     - name: Build
//       run: npm run build

//     - name: Publish to NPM
//       run: npm publish --access public
//       env:
//         NODE_AUTH_TOKEN: ${{ secrets.NPM_TOKEN }}

//     - name: Create GitHub Release
//       uses: actions/create-release@v1
//       env:
//         GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
//       with:
//         tag_name: ${{ github.ref }}
//         release_name: Release ${{ github.ref }}
//         body: |
//           Release automático creado desde CI/CD
// Requerimientos:
// # Instalar herramientas de Git avanzado
// npm install --save-dev husky lint-staged @commitlint/cli @commitlint/config-conventional

// # Inicializar Husky
// npx husky init

// # Configurar hooks
// npx husky add .husky/pre-commit "npx lint-staged"
// npx husky add .husky/commit-msg "npx --no-install commitlint --edit \$1"

// # Crear archivo de configuración
// touch commitlint.config.js