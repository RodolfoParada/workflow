// Task 2: Rebasing vs Merging (8 minutos)
// Entender cuándo usar cada estrategia.

// # MERGE - Preserva historial completo
// # Crea commit de merge
// # Historial ramificado visible

// git checkout feature
// git merge main

// # Resultado:
// # *   Merge branch 'main' into feature
// # |\
// # | * Commit from main
// # * | Feature commit
// # |/
// # * Common ancestor

// # Ventajas: Historial completo, fácil de entender
// # Desventajas: Commits de merge "ruidosos"
// # REBASE - Historial lineal
// # Reaplica commits sobre la rama destino
// # Historial limpio y lineal

// git checkout feature
// git rebase main

// # Resultado:
// # * Feature commit (reaplicado)
// # * Commit from main
// # * Common ancestor

// # Ventajas: Historial limpio, fácil de seguir
// # Desventajas: Reescrbe historial, peligroso con branches compartidos
// Cuándo usar cada uno
const whenToUse = {
  merge: [
    'Branches públicas compartidas',
    'Preservar contexto histórico',
    'Integración conservadora',
    'Equipos grandes con muchos contribuidores'
  ],

  rebase: [
    'Branches locales personales',
    'Mantener historial limpio',
    'Antes de integrar a branch principal',
    'Trabajo individual o equipo pequeño'
  ],

  // Regla general:
  interactiveRebase: 'Para limpiar commits antes de push',
  merge: 'Para integrar branches compartidos'
};