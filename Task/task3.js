// Task 3: Git Hooks y Automatización (6 minutos)
// Automatizar calidad y procesos.

// # Git hooks disponibles
// ls .git/hooks/
// # pre-commit, prepare-commit-msg, commit-msg
// # pre-push, post-commit, post-merge, etc.

// # Crear hook pre-commit
// cat > .git/hooks/pre-commit << 'EOF'
// #!/bin/sh

// echo "🚀 Ejecutando pre-commit checks..."

// # Run linter
// npm run lint

// # Run tests
// npm run test

// echo "✅ Pre-commit checks passed!"
// EOF

// chmod +x .git/hooks/pre-commit
// # Husky - Git hooks moderno
// npm install --save-dev husky lint-staged

// # package.json
// {
//   "husky": {
//     "hooks": {
//       "pre-commit": "lint-staged",
//       "commit-msg": "commitlint -E HUSKY_GIT_PARAMS"
//     }
//   },
//   "lint-staged": {
//     "*.js": [
//       "eslint --fix",
//       "prettier --write",
//       "git add"
//     ]
//   }
// }
// # Commitlint - Formato de commits consistente
// npm install --save-dev @commitlint/cli @commitlint/config-conventional

// # commitlint.config.js
// module.exports = {
//   extends: ['@commitlint/config-conventional'],
//   rules: {
//     'type-enum': [
//       2,
//       'always',
//       [
//         'feat',     // Nueva feature
//         'fix',      // Bug fix
//         'docs',     // Documentación
//         'style',    // Formateo
//         'refactor', // Refactorización
//         'test',     // Tests
//         'chore'     // Mantenimiento
//       ]
//     ]
//   }
// };