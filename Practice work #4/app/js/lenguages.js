"use strict";

let select = document.querySelector('.lenguages');

select.addEventListener('change', (event) => {
    switch (event.target.value) {
        case 'english': {
            document.querySelector('.guiz__a_quiz').innerText = "Quiz";
            document.querySelector('.guiz__a_support').innerText = "Support";
            document.querySelector('.guiz__a_support').style.marginRight = "0px"
            let getAppInput = document.querySelectorAll('.get-app__input');
            let getAppSubmit = document.querySelectorAll('.get-app__submit');
            for (let i = 0; i < getAppInput.length; i++) {
                getAppInput[i].setAttribute("placeholder", 'Enter your mobile number');
                getAppSubmit[i].setAttribute("value", 'Get app');
            }
            document.querySelector('.one-curd__h1').innerText = "One card with all the right moves";
            document.querySelector('.main-sub-title__p').innerText = "Score Cash Advance up to $250* with no interest. Get paid up to 2 days faster.^ Plus, rake in cashback rewards.†";
            document.querySelector('.motivation-text__p').innerText = "You're going to love getting carded.";

            document.querySelector('.benefit__h4-apple').innerText = "APPLE";
            document.querySelector('.benefit__p-new-apps').innerText = "New Apps We Love";
            document.querySelector('.benefit__h4-time').innerText = "TIME";
            document.querySelector('.benefit__p-best-apps').innerText = "Best Apps of the Year";
            document.querySelector('.benefit__h4-simple').innerText = "REAL SIMPLE";
            document.querySelector('.benefit__p-smart-money').innerText = "Smart Money Award";
            document.querySelector('.benefit__h4-fintech').innerText = "FINTECH 250";
            document.querySelector('.benefit__p-promising-startups').innerText = "Promising Startups";
            document.querySelector('.benefit__h4-simple-dollar').innerText = "THE SIMPLE DOLLAR";
            document.querySelector('.benefit__p-best-all').innerText = "Best All-In-One Banking Tool";

            document.querySelector('.article-main-title__h2').innerText = "The only card you'll ever need";
            document.querySelector('.contents-of-articles__h3_1').innerText = "Get Cash Advance up to $250 directly to your account";
            document.querySelector('.contents-of-articles__h3_2').innerText = "Get your paycheck up to 2 days early";
            document.querySelector('.contents-of-articles__h3_3').innerText = "Get up to 10% cashback";
            document.querySelector('.contents-of-articles__h3_4').innerText = "Score free unlimited access to 37,000 ATMs";
            document.querySelector('.contents-of-articles__h3_5').innerText = "Count on phone and live chat support";
            let btnReadMore = document.querySelectorAll('.contents-of-articles__button');
            for (let i = 0; i < btnReadMore.length; i++) {
                btnReadMore[i].innerText = "READ MORE";
            }

            document.querySelector('.loved-by-title__h2').innerText = "LOVED BY";

            document.querySelector('.title-card-colors__h3').innerText = "MAKE YOUR MOVE";
            document.querySelector('.title-card-colors__h2').innerText = "Two colors, your choice";

            document.querySelector('.title-download-empower__h2').innerHTML = "Download the Empower<br>app for free today.";

            document.querySelector('.footer-description__p').innerText = '® The Empower name and logos are trademarks and service marks (collectively, the “Empower Trademarks”) owned by Empower Finance, Inc. You do not acquire a license or any ownership rights to any trademarks, service marks, or trade names through your access or use of the Empower app or platform product or service.';
            document.querySelector('.footer-table__td_support').innerText = "Support";
            document.querySelector('.footer-table__td_legal').innerText = "Legal";
            document.querySelector('.footer-table__td_facebook').innerText = "Facebook";
            document.querySelector('.footer-table__td_careers').innerText = "Careers";
            document.querySelector('.footer-table__td_terms').innerText = "Terms of Service";
            document.querySelector('.footer-table__td_instagram').innerText = "Instagram";
            document.querySelector('.footer-table__td_privacy').innerText = "Privacy";
            document.querySelector('.footer-table__td_twitter').innerText = "Twitter";

            document.querySelector('.about-company__p_1').innerText = "Empower is a financial technology company, not a bank. Banking services provided by nbkc bank, Member FDIC.";
            document.querySelector('.about-company__p_2').innerText = "* Eligibility requirements apply. Free instant delivery is available for eligible Empower Checking Account customers with an activated debit card.";
            document.querySelector('.about-company__p_3').innerText = "^ Early access to paycheck deposit funds depends on the timing of the employer’s submission of deposits. We generally post such deposits on the day they are received which may be up to 2 days earlier <br>than the employer’s scheduled payment date.";
            document.querySelector('.about-company__p_4').innerText = "† Cashback deals on Empower Card purchases, including categories, merchants, and percentages, will vary and must be selected in the app. Cashback will be applied automatically when the final <br>transaction posts, which may be up to a week after the qualifying purchase.";
            document.querySelector('.about-company__p_5').innerText = "^^ Terms and conditions apply.";

            document.querySelector('.black-theme__label').innerText = "Black theme:";
            document.querySelector('.label-lenguages').innerText = "Lenguage:";

            break;
        }
        case 'ukrainian': {
            document.querySelector('.guiz__a_quiz').innerText = "Вікторина";
            document.querySelector('.guiz__a_support').innerText = "Підтримка";
            document.querySelector('.guiz__a_support').style.marginRight = "100px"
            let getAppInput = document.querySelectorAll('.get-app__input');
            let getAppSubmit = document.querySelectorAll('.get-app__submit');
            for (let i = 0; i < getAppInput.length; i++) {
                getAppInput[i].setAttribute("placeholder", 'Введіть свій моб. номер');
                getAppSubmit[i].setAttribute("value", 'Отримати');
            }
            document.querySelector('.one-curd__h1').innerText = "Одна карта з усіма правильними ходами";
            document.querySelector('.main-sub-title__p').innerText = "Отримайте готівковий аванс до $250* без відсотків. Отримуйте гроші до 2 днів швидше.^ Крім того, отримуйте кешбек винагороди.†";
            document.querySelector('.motivation-text__p').innerText = "Тобі сподобається, коли отримаєш картку.";

            document.querySelector('.benefit__h4-apple').innerText = "ЯБЛУКО";
            document.querySelector('.benefit__p-new-apps').innerText = "Нові Програми Які Нам Подобаються";
            document.querySelector('.benefit__h4-time').innerText = "ЧАС";
            document.querySelector('.benefit__p-best-apps').innerText = "Найкращі Програми Року";
            document.querySelector('.benefit__h4-simple').innerText = "ПРОСТОТА";
            document.querySelector('.benefit__p-smart-money').innerText = "Премія «Розумні Гроші»";
            document.querySelector('.benefit__h4-fintech').innerText = "ФІНТЕХ 250";
            document.querySelector('.benefit__p-promising-startups').innerText = "Перспективні Стартапи";
            document.querySelector('.benefit__h4-simple-dollar').innerText = "ПРОСТИЙ ДОЛАР";
            document.querySelector('.benefit__p-best-all').innerText = "Найкращий Універсальний Банківський Інструмент";


            document.querySelector('.article-main-title__h2').innerText = "Єдина картка, яка вам коли-небудь знадобиться";
            document.querySelector('.contents-of-articles__h3_1').innerText = "Отримайте готівковий аванс до 250 доларів США безпосередньо на свій рахунок";
            document.querySelector('.contents-of-articles__h3_2').innerText = "Отримайте зарплату до 2 днів раніше";
            document.querySelector('.contents-of-articles__h3_3').innerText = "Отримайте до 10% кешбеку";
            document.querySelector('.contents-of-articles__h3_4').innerText = "Отримайте безкоштовний необмежений доступ до 37 000 банкоматів";
            document.querySelector('.contents-of-articles__h3_5').innerText = "Розраховуйте на підтримку по телефону та в чаті";
            let btnReadMore = document.querySelectorAll('.contents-of-articles__button');
            for (let i = 0; i < btnReadMore.length; i++) {
                btnReadMore[i].innerText = "ЧИТАТИ";
            }

            document.querySelector('.loved-by-title__h2').innerText = "ПОДОБАЄТЬСЯ";

            document.querySelector('.title-card-colors__h3').innerText = "ЗРОБИ СВІЙ ХІД";
            document.querySelector('.title-card-colors__h2').innerText = "Два кольори на ваш вибір";

            document.querySelector('.title-download-empower__h2').innerText = "Завантажте Empower безкоштовно сьогодні.";

            document.querySelector('.footer-description__p').innerText = '® Ім’я та логотипи Empower є товарними знаками та знаками обслуговування (разом «Торгові знаки Empower»), що належать Empower Finance, Inc. Ви не отримуєте ліцензію або будь-які права власності на будь-які торговельні марки, знаки обслуговування чи комерційні назви через свій доступ або використання програми Empower або продукту чи послуги платформи.';
            document.querySelector('.footer-table__td_support').innerText = "Підтримка";
            document.querySelector('.footer-table__td_legal').innerText = "Правовий";
            document.querySelector('.footer-table__td_facebook').innerText = "Facebook";
            document.querySelector('.footer-table__td_careers').innerText = "Кар'єра";
            document.querySelector('.footer-table__td_terms').innerText = "Умови обслуговування";
            document.querySelector('.footer-table__td_instagram').innerText = "Instagram";
            document.querySelector('.footer-table__td_privacy').innerText = "Конфіденційність";
            document.querySelector('.footer-table__td_twitter').innerText = "Twitter";

            document.querySelector('.about-company__p_1').innerText = "Empower — це фінансово-технологічна компанія, а не банк. Банківські послуги надає nbkc bank, член FDIC.";
            document.querySelector('.about-company__p_2').innerText = "* Застосовуються вимоги відповідності. Безкоштовна миттєва доставка доступна для відповідних клієнтів Empower Checking Account з активованою дебетовою карткою.";
            document.querySelector('.about-company__p_3').innerText = "^ Ранній доступ до депозитних коштів залежить від часу подання роботодавцем депозитів. Зазвичай ми розміщуємо такі депозити в день їх отримання, що може бути до 2 днів раніше <br>запланованої дати платежу роботодавця.";
            document.querySelector('.about-company__p_4').innerText = "† Угоди щодо повернення готівки за покупки за карткою Empower Card, включаючи категорії, продавців і відсотки, можуть відрізнятися та їх потрібно вибирати в додатку. Кешбек буде застосовано автоматично, коли буде опубліковано останню <br>трансакцію, що може відбутися протягом тижня після відповідної покупки.";
            document.querySelector('.about-company__p_5').innerText = "^^ Застосовуються положення та умови.";

            document.querySelector('.black-theme__label').innerText = "Темна тема:";
            document.querySelector('.label-lenguages').innerText = "Мова:";

            break;
        }
    }
});
