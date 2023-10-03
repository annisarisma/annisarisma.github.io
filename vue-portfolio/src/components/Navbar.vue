<template>
  <nav>
    <ul>
        <li><a href="">Home</a></li>
        <li><a href="">About</a></li>
        <li><a href="">Skills</a></li>
        <li><a href="">Experience</a></li>
        <li><a href="">My Project</a></li>
    </ul>
  </nav>
</template>

<script>
export default {

}
</script>

<style lang="scss">
nav {
    padding: 20px 40px;
    ul {
        display: flex;
        justify-content: end;
        gap: 20px;
        li {
            list-style: none;
            a {
                color: white;
                text-decoration: none;
                font-weight: 100;
            }
        }
    }
}
</style>