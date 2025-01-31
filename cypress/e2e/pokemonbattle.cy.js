import * as poki from "../helpers/default_poki.json"
import * as map from "../locators/map.json"

describe('Проверка Лавка', function () {


      it('Покупка аватара', function () { 
          
              cy.visit("https://pokemonbattle.ru/shop"); // зайти на сайт
              cy.get(':nth-child(1) > .auth__input').type(poki.USER_LOGIN); // ввести логин
              cy.get('#password').type(poki.USER_PASSWORD); // ввести пароль
              cy.get('.auth__button').click();  // нажать войти
              cy.get(':nth-child(4) > .mobile__link').click(); // нажать на иконку "профиль"
              cy.get('[href="/shop"]').click(); // нажать на иконку "смена аватара"
              cy.get('.shop__list > :nth-child(5)').trigger('mouseover'); // проверка эффект наведения на 12 тренере
              cy.get('.available > button').first().click({ force: true });   // нажать Купить у первого доступного аватара
              cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type(map.card_number); // ввести номер карты
              cy.get(':nth-child(1) > .pay_base-input-v2').type(map.card_actual); // ввести срок 
              cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type(map.card_cvv); // ввести код 
              cy.get('.pay__input-box-last-of > .pay_base-input-v2').type(map.card_name); // ввести имя
              cy.get('.pay-btn').click(); // нажать иконку "оплатить"
              cy.get('#cardnumber').type(56456); // ввести код от СМС
              cy.get('.payment__submit-button').click(); // нажать иконнку "отправить"
              cy.get('.payment__font-for-success').contains('Покупка прошла успешно'); // проверка успешнй покупки

           })
      })



      




