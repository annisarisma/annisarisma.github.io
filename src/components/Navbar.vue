<template>
    <div class="container-nav">
        <nav :class="{'scrolled-nav': scrolledNav}">
          <ul :class="{'mobile-nav': mobile}">
              <li><a href="#home">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="">Experience</a></li>
              <li><a href="">My Project</a></li>
          </ul>
        </nav>
    </div>
</template>

<script>
export default {
    data() {
        return {
            scrolledNav: false,
        }
    },
    mounted() {
        window.addEventListener("scroll", this.updateScroll);
    },
    methods: {
        updateScroll() {
        const scrollPosition = window.scrollY;

        if (scrollPosition > 50) {
            this.scrolledNav = true;
            return;
        }

        this.scrolledNav = false;
        }
    },
}
</script>

<style lang="scss" scoped>
nav {
    position: fixed;
    width: 100%;
    margin: 0px;
    padding: 0px;
    z-index: 2;
    ul {
        display: flex;
        justify-content: end;
        gap: 20px;
        padding: 20px 40px;
        li {
            list-style: none;
            a {
                color: white;
                text-decoration: none;
                font-weight: 100;
            }
        }
    }

    .mobile-nav {
        flex-direction: column;
    }
}

.scrolled-nav {
    background-color: #161616;
}
</style>