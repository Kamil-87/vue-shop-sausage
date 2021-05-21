<template>
    <section class="benefit-list">
        <h2 class="benefit-list__title">Наши плюсы</h2>

        <div class="benefit-list__box">
            <article>
                <img src="/icons/plus__1.svg" alt="Широкий ассортимент">
                <h4>Широкий ассортимент</h4>
                <p>Мы закупаем колбасы от производителя. Более 400 видов колбасы
                    представлены на наших прилавках.</p>
            </article>

            <article>
                <img src="/icons/plus__2.svg" alt="Всегда свежие">
                <h4>Всегда свежие</h4>
                <p>Все продукты перевозятся в машинах-рефрижераторах с разными режимами температуры. Мы знаем, сколько градусов внутри каждой колбасы!</p>
            </article>

            <article>
                <img src="/icons/plus__3.svg" alt="Контроль качества">
                <h4>Контроль качества</h4>
                <p>Мы контролируем качество – от поставщика до полки. Для хранения мы используем самое современное оборудование.</p>
            </article>
        </div>
    </section>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>

.benefit-list {
    padding-bottom: 3rem;

    &__title {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 3rem;
    }

    &__box {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        grid-gap: 1rem;
    }
}

article {
    max-width: 300px;
    font-size: 2.2rem;
    text-align: center;
    color: $colorText;

    & h4 {
        margin-bottom: 15px;
        font-size: 2.4rem;
    }
}
</style>
