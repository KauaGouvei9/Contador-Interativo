# 🔢 Contador Interativo

Um contador interativo desenvolvido com HTML, CSS e JavaScript puro, criado durante meus estudos de manipulação do DOM.

## 🌐 [Acesse o Projeto Online](https://kauagouvei9.github.io/Contador-Interativo/)

## 📸 Preview

![Preview do Contador](./images/apresentacao-contador.png)

## 🚀 Funcionalidades

### Operações Básicas
- ➕ **Incrementar** - Aumenta o contador
- ➖ **Decrementar** - Diminui o contador
- 🔄 **Reset** - Volta para zero

### Operações Avançadas
- ✖️ **Multiplicar por 2** - Dobra o valor atual
- ➗ **Dividir por 2** - Divide o valor pela metade (arredonda para baixo)

### Personalização
- 🎛️ **Passo Customizado** - Define quanto aumentar/diminuir (1 a 999)
- 🛡️ **Limites Automáticos** - Contador limitado entre -999 e 999
- ✅ **Validação Defensiva** - Input valida automaticamente valores inválidos

### Visual
- 🎨 **Mudança de Cor Dinâmica**:
  - **Verde** quando positivo
  - **Vermelho** quando negativo
  - **Preto** quando zero
- ✨ **Interface Moderna** - Design com gradientes e animações suaves
- 📱 **Responsivo** - Funciona em qualquer dispositivo

## 🛠️ Tecnologias Utilizadas

- **HTML5** - Estrutura semântica
- **CSS3** - Flexbox, Gradientes, Transitions
- **JavaScript (ES6+)** - Lógica e manipulação do DOM

## 💡 Conceitos Aplicados

### JavaScript
- Manipulação do DOM (`querySelector`)
- Event Listeners (`click`, `blur`)
- Funções modulares e reutilizáveis
- Arrow Functions
- Validação de inputs
- Programação defensiva
- Single Responsibility Principle

### Boas Práticas
- Separação de responsabilidades
- Código DRY (Don't Repeat Yourself)
- Validação client-side
- Nomenclatura clara e descritiva

## 📂 Estrutura do Projeto
```
contador-interativo/
│
├── images/
│   └── screenshot.png    # Preview do projeto
├── index.html            # Estrutura HTML
├── style.css             # Estilização
├── app.js                # Lógica JavaScript
├── README.md             # Documentação
└── LICENSE               # Licença MIT
```

## 🎯 Como Usar

### Online
Acesse diretamente: [https://kauagouvei9.github.io/Contador-Interativo/](https://kauagouvei9.github.io/Contador-Interativo/)

### Localmente

1. Clone este repositório:
```bash
git clone https://github.com/kauagouvei9/Contador-Interativo.git
```

2. Navegue até a pasta:
```bash
cd Contador-Interativo
```

3. Abra o arquivo `index.html` no seu navegador

4. Interaja com os botões!

## 🎮 Instruções de Uso

1. **Definir Passo** - Digite um valor de 1 a 999 no campo "Aumentar/diminuir de"
2. **Incrementar/Decrementar** - Use os botões + e - (respeitam o passo definido)
3. **Operações Rápidas** - Use x2 para dobrar ou ÷2 para dividir pela metade
4. **Reset** - Clique em Reset para voltar ao zero
5. **Limites** - O contador automaticamente para em 999 ou -999

## 🧠 Aprendizados

Este projeto foi desenvolvido para praticar:

### Fundamentos
- Seleção de elementos com `querySelector`
- Manipulação de propriedades (`textContent`, `style`, `value`)
- Adição de event listeners (`click`, `blur`)

### Arquitetura
- Separação de funções por responsabilidade
- Criação de funções reutilizáveis
- Organização estrutural do código (Seleções → Funções → Programa Principal)

### Validação
- Validação de inputs em tempo real
- Aplicação de limites em múltiplas camadas
- Programação defensiva contra valores inválidos

## 📝 Licença

Este projeto está sob a licença MIT. Sinta-se livre para usar e modificar!

## 👤 Autor

Desenvolvido por Kauã durante meus estudos de JavaScript

---

⭐ Se este projeto te ajudou, deixe uma estrela!