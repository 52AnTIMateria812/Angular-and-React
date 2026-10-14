import React from 'react';
import Greeting from './components/Greeting.jsx';
import Product from './components/Product.jsx';
import Avatar from './components/Avatar.jsx';
import Card from './components/Card.jsx';
import Button from './components/Button.jsx';

function App() {
  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">Практика React</p>
        <h1>Компоненты и пропсы</h1>
        <p className="intro">Небольшая витрина компонентов с разными вариантами пропсов.</p>
      </header>

      <section className="demo-section" aria-labelledby="greeting-title">
        <h2 id="greeting-title">Задача 1. Компонент Greeting</h2>
        <div className="demo-row">
          <Greeting name="Иван" />
          <Greeting name="Анна" greeting="Добро пожаловать" />
          <Greeting />
        </div>
      </section>

      <section className="demo-section" aria-labelledby="product-title">
        <h2 id="product-title">Задача 2. Компонент Product</h2>
        <div className="demo-row">
          <Product title="Наушники" price={5000} discount={20} />
          <Product title="Блокнот" price={450} />
        </div>
      </section>

      <section className="demo-section" aria-labelledby="avatar-title">
        <h2 id="avatar-title">Задача 3. Компонент Avatar</h2>
        <div className="demo-row avatar-row">
          <Avatar name="Анна" size={32} />
          <Avatar name="Борис" size={48} />
          <Avatar name="Вера" size={80} />
        </div>
      </section>

      <section className="demo-section" aria-labelledby="card-title">
        <h2 id="card-title">Задача 4. Компонент Card с children</h2>
        <div className="card-grid">
          <Card title="Добро пожаловать">
            <p>Внутри карточки может находиться обычный текст.</p>
          </Card>
          <Card title="Ваш список">
            <ul>
              <li>Изучить компоненты</li>
              <li>Передать пропсы</li>
            </ul>
            <Button variant="primary">Готово</Button>
          </Card>
        </div>
      </section>

      <section className="demo-section" aria-labelledby="button-title">
        <h2 id="button-title">Задача 5. Компонент Button с вариантами</h2>
        <div className="demo-row">
          <Button variant="primary" onClick={() => window.alert('Нажата синяя кнопка')}>
            Основная
          </Button>
          <Button variant="secondary">Вторичная</Button>
          <Button variant="danger">Удалить</Button>
          <Button disabled>Отключена</Button>
        </div>
      </section>
    </main>
  );
}

export default App;
