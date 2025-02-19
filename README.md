# React Product Filter

Un composant React permettant de filtrer et d'afficher une liste de produits par catégorie. Les utilisateurs peuvent rechercher des produits et filtrer les produits en rupture de stock.

## Description du Repository
Application React démontrant la gestion d'état et le filtrage de données avec des composants contrôlés. Implémente un cas d'usage classique de filtrage de produits avec une interface utilisateur intuitive.

## Fonctionnalités

- 🔍 Recherche en temps réel de produits
- ✅ Filtrage des produits en stock/rupture de stock
- 📊 Affichage organisé par catégories
- 🎨 Indication visuelle des produits en rupture de stock (texte en rouge)
- ⚛️ Architecture React moderne avec composants fonctionnels et hooks

## Structure du Projet

```
src/
├── components/
│   ├── products/
│   │   ├── ProductTable.jsx
│   │   ├── ProductRow.jsx
│   │   └── ProductCategoryRow.jsx
│   └── searching/
│       ├── SearchBar.jsx
│       ├── Input.jsx
│       └── CheckBox.jsx
└── App.jsx
```

## Composants

### App.jsx
Composant principal qui :
- Maintient l'état global (recherche et filtre de stock)
- Gère la logique de filtrage des produits
- Orchestre les composants enfants

### SearchBar
Barre de recherche composite comprenant :
- Un champ de recherche (`Input`)
- Une case à cocher pour filtrer les produits en stock (`CheckBox`)

### ProductTable
Table de produits qui :
- Organise les produits par catégories
- Affiche les en-têtes de catégories
- Gère l'affichage des lignes de produits

### Composants Auxiliaires
- `ProductRow` : Affiche une ligne de produit
- `ProductCategoryRow` : Affiche l'en-tête d'une catégorie
- `Input` : Composant de saisie contrôlé
- `CheckBox` : Composant de case à cocher contrôlé

## État et Flux de Données

Les états sont gérés au niveau de `App.jsx` :
```javascript
const [stockedOnly, setStockedOnly] = useState(false);
const [search, setSearch] = useState("");
```

Le flux de données est unidirectionnel :
1. L'utilisateur interagit avec `SearchBar`
2. Les modifications déclenchent les setters d'état
3. Le nouveau state déclenche un re-rendu
4. La liste des produits est filtrée selon les critères
5. `ProductTable` affiche les produits filtrés

## Installation et Utilisation

1. Clonez le repository
```bash
git clone [url-du-repo]
```

2. Installez les dépendances
```bash
npm install
```

3. Lancez l'application
```bash
npm run dev
```

## Points Techniques Notables

- Utilisation des Hooks React (`useState`)
- Composants contrôlés pour les formulaires
- Props typées avec JSDoc
- Gestion efficace du filtrage avec `Array.filter()`
- Structure de composants modulaire et réutilisable
- Convention de nommage cohérente pour les props et événements

## Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche pour votre fonctionnalité
3. Commiter vos changements
4. Pousser vers la branche
5. Ouvrir une Pull Request