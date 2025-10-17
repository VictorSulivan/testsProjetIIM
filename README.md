### **Partie 1 – Compréhension rapide (15 points, ~10 min)**

**1.** En une ou deux phrases, expliquez le principe du TDD et ses trois étapes clés. *(5 pts)*
**2.** Citez deux avantages concrets du TDD. *(5 pts)*
**3.** Quelle est la différence entre un fake et un stub ? Donnez un exemple rapide. *(5 pts)*

---


### ** Réponses:
1. Le TDD (Test-Driven Development) consiste à écrire d’abord les tests avant le code fonctionnel. Ses trois étapes clés sont :

Red : écrire un test qui échoue,

Green : écrire juste assez de code pour le faire passer,

Refactor : améliorer le code sans casser les tests.

2. Deux avantages concrets du TDD :

Il réduit les bugs en forçant à penser aux cas de test dès le départ.

Il améliore la conception du code, en favorisant des modules plus petits et mieux structurés.

3. Un stub fournit des réponses prédéfinies à des appels (sans logique interne), tandis qu’un fake est une implémentation simplifiée mais fonctionnelle.
Exemple :

Stub : une méthode getUser() renvoie toujours null.

Fake : une méthode getUser() cherche vraiment dans une petite liste en mémoire.