import styles from "./cardsProductsSection.module.css";

const CardsProductsSection = ({ products, sectionTitle }) => {
    return (
        <div class="bf-featured slick-initialized slick-slider"><div class="slick-list draggable"><div class="slick-track" style="opacity: 1; width: 1204px; transform: translate3d(0px, 0px, 0px);"><div class="slick-slide slick-current slick-active" data-slick-index="0" aria-hidden="false" style="width: 301px;"><div><div class="bf-featured__item" style="width: 100%; display: inline-block;">
            <a class="bf-featured__content" href="/acessorios?PS=20&amp;O=OrderByNameASC" tabindex="0">
                <h3 class="bf-featured__title bf-signature">Acessórios</h3>
                <div class="bf-featured__media">
                    <img src="/arquivos/categories-home-acessorios.png?v=638755705426600000">
                </div>
            </a>
        </div></div></div><div class="slick-slide slick-active" data-slick-index="1" aria-hidden="false" style="width: 301px;"><div><div class="bf-featured__item" style="width: 100%; display: inline-block;">
            <a class="bf-featured__content" href="/labios?PS=20&amp;O=OrderByNameASC" tabindex="0">
                <h3 class="bf-featured__title bf-signature">Lábios</h3>
                <div class="bf-featured__media">
                    <img src="/arquivos/categories-home-labios.png?v=638755705430200000">
                </div>
            </a>
        </div></div></div><div class="slick-slide slick-active" data-slick-index="2" aria-hidden="false" style="width: 301px;"><div><div class="bf-featured__item" style="width: 100%; display: inline-block;">
            <a class="bf-featured__content" href="/olhos?PS=20&amp;O=OrderByNameASC" tabindex="0">
                <h3 class="bf-featured__title bf-signature">Olhos</h3>
                <div class="bf-featured__media">
                    <img src="/arquivos/categories-home-olhos.png?v=638755706798370000">
                </div>
            </a>
        </div></div></div><div class="slick-slide slick-active" data-slick-index="3" aria-hidden="false" style="width: 301px;"><div><div class="bf-featured__item" style="width: 100%; display: inline-block;">
            <a class="bf-featured__content" href="/face?PS=20&amp;O=OrderByNameASC" tabindex="0">
                <h3 class="bf-featured__title bf-signature">Rosto</h3>
                <div class="bf-featured__media">
                    <img src="/arquivos/categories-home-rosto.png?v=638755702945330000">
                </div>
            </a>
        </div></div></div></div></div></div>
    )