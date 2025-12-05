# 📊 Sistema de Visualização de Algoritmos de Ordenação (JavaScript / Canvas)

[![JavaScript](https://img.shields.io/badge/Language-JavaScript%2FES6-F7DF1E?style=flat-square&logo=javascript)](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript)
[![Frontend](https://img.shields.io/badge/Interface-HTML5%20Canvas-E94E31?style=flat-square&logo=html5)](https://developer.mozilla.org/pt-BR/docs/Web/API/Canvas_API)
[![Algorithm](https://img-url-placeholder)](https://img.shields.io/badge/Topic-Sorting%20Algorithms-4FC3F7?style=flat-square)
[![Visualization](https://img.shields.io/badge/Concept-Visualization-800080?style=flat-square)]()

## 📝 Descrição do Projeto

Este projeto consiste na criação de uma ferramenta interativa para **visualizar o funcionamento de Algoritmos de Ordenação (Sorting Algorithms)** utilizando **JavaScript** e a API **HTML5 Canvas**. O objetivo é transformar conceitos abstratos de Estrutura de Dados em uma representação gráfica onde o usuário pode acompanhar o processo de ordenação de um array (vetor) em tempo real.

A visualização é feita através de **barras verticais** (onde a altura de cada barra representa o valor de um elemento no array), que mudam de cor e posição conforme o algoritmo executa comparações e trocas.

Este projeto é excelente para consolidar conhecimentos em:

1.  **Manipulação de Canvas:** Desenhar, limpar e redesenhar o estado da tabela a cada iteração, aplicando a mesma lógica de *game loop* que você utilizou no seu projeto "Death Chase".
2.  **Programação Assíncrona:** Utilizar `async/await` ou `Promises` para controlar o *timing* e a velocidade da visualização, permitindo que o usuário veja a execução frame a frame.
3.  **Análise de Algoritmos:** Entender visualmente as diferenças de eficiência ($O(n^2)$ vs $O(n \log n)$) entre diferentes métodos.

---

## 🛠️ Tecnologias e Implementação

| Categoria | Tecnologia | Uso Principal |
| :---: | :---: | :--- |
| **Linguagem** | `JavaScript (ES6+)` | Lógica dos algoritmos e controle de visualização. |
| **Visualização** | `HTML5 Canvas` | Renderização gráfica das barras. |
| **Interface** | `HTML` / `CSS` | Controles (botões, sliders) e layout. |

### Algoritmos a serem Implementados

O sistema deve ter módulos separados para implementar e visualizar pelo menos os seguintes algoritmos:

| Algoritmo | Complexidade Média | Descrição do Funcionamento |
| :---: | :---: | :--- |
| **Bubble Sort** | $O(n^2)$ | Compara e troca repetidamente os elementos adjacentes. |
| **Insertion Sort** | $O(n^2)$ | Constrói a lista final, um item de cada vez, inserindo cada novo item em sua posição correta na sub-lista ordenada. |
| **Merge Sort** | $O(n \log n)$ | Divide o array em metades, ordena cada metade recursivamente e depois as combina (merge). |
| **Quick Sort** | $O(n \log n)$ | Escolhe um elemento pivô e particiona os demais elementos em dois sub-arrays. |

---

## ✨ Funcionalidades

### 1. Geração de Dados
* **Gerar Array:** Botão para criar um novo array de números aleatórios com tamanho e range definidos (e.g., 50 elementos).
* **Controle de Tamanho:** Slider para alterar o número de barras (elementos).

### 2. Controles de Execução
* **Selecionar Algoritmo:** Menu (dropdown) para escolher o algoritmo a ser visualizado.
* **Controle de Velocidade (Slider):** Ajustar o tempo de atraso (delay) entre as comparações para observar o processo em câmera lenta ou rápida.
* **Iniciar/Pausar/Resetar:** Controle total sobre a execução da visualização.

### 3. Visualização Dinâmica
* **Representação de Barras:** O `Canvas` deve desenhar as barras com base nos valores do array.
* **Destaque de Cores:**
    * **Comparação:** Mudar a cor (ex: Amarelo) das duas barras que estão sendo comparadas na iteração atual.
    * **Troca:** Mudar a cor (ex: Vermelho) se uma troca estiver prestes a ocorrer.
    * **Ordenado:** Cor final (ex: Verde) para elementos que já foram colocados em sua posição final correta.

---

## 🚀 Como Executar

1.  Crie os arquivos **`index.html`**, **`style.css`** e **`sort_visualizer.js`**.
2.  Implemente a lógica dos algoritmos de ordenação no JavaScript, adicionando o *delay* programado a cada passo de comparação/troca.
3.  O script principal deve redesenhar o *array* no Canvas a cada *delay* para mostrar o progresso.

```bash
# Basta abrir o arquivo index.html em qualquer navegador moderno.
open index.html
