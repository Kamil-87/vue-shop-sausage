<template>
    <section class="reviews">
        <h2 class="reviews__title">Отзывы клиентов</h2>

        <div class="reviews__box">
            <article>
                <h4>NameClient</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam beatae consectetur consequatur,
                    consequuntur dicta dignissimos dolor dolorem ea incidunt iusto libero minima minus necessitatibus
                    neque nesciunt obcaecati odio officiis quam quas quasi quia repellendus saepe totam ullam veritatis
                    voluptas voluptatibus? Accusamus eius eos esse harum inventore iste labore nemo nihil rerum velit.
                    Architecto dolorum eligendi facilis fuga illo neque, perspiciatis repudiandae vel veniam vitae!
                    Aspernatur cumque cupiditate eaque eligendi eum exercitationem, illum laudantium magnam nemo nulla
                    repellat saepe sequi similique unde vitae. Asperiores aut esse facilis fugiat iste labore minima
                    mollitia officia officiis quam quis repellendus, reprehenderit repudiandae similique voluptate.</p>
            </article>

            <article>
                <h4>NameClient2</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aspernatur ducimus id nobis
                    sequi. Dolores earum eos ex perferendis sapiente. Ab aliquid animi culpa est eum eveniet in
                    inventore labore libero, minus molestiae placeat qui quisquam quos, repellat saepe sapiente tempore
                    tenetur voluptate voluptatem! Aliquid blanditiis itaque numquam perferendis quae!</p>
            </article>

            <article>
                <h4>NameClient3</h4>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi cupiditate esse praesentium
                    recusandae rem! Ad consectetur est iure laborum rerum, temporibus? Aliquam aspernatur blanditiis,
                    consectetur distinctio dolores eum fugiat inventore magnam, minus nihil odit provident soluta totam.
                    Dolore expedita id laborum laudantium nostrum quas quisquam sit unde veniam voluptas! Culpa
                    dignissimos eligendi facilis numquam perferendis placeat rem ut. Adipisci consequatur dolorem
                    doloremque doloribus et eveniet harum in inventore maiores mollitia necessitatibus neque perferendis
                    praesentium, ratione reiciendis sed tempore totam voluptas! .</p>
            </article>
        </div>
    </section>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>

.reviews {
    padding-bottom: 3rem;

    &__title {
        font-size: 3.2rem;
        font-weight: bold;
        margin-bottom: 3rem;
    }

    &__box {
        display: flex;
        align-items: flex-start;
        grid-gap: 3rem;
    }
}

article {
    max-width: 450px;
    min-width: 350px;
    font-size: 1.6rem;
    text-align: left;
    color: $colorText;
    background: $greyLight;
    padding: 30px;

    & h4 {
        margin-bottom: 15px;
        font-size: 2rem;
    }
}
</style>
