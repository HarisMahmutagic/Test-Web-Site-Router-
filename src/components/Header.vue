<template>
    <div Id="HEADER">
      <router-link to="/"> <p id="Home">Home</p> </router-link>
        <router-link to="/About"> <p id="About">About</p> </router-link>
        <img id="logo" src="./Logo.png">
        </div>    
</template>

<script>
export default {
    name: "Header"
}

</script>

<style scoped>
#HEADER{
width: 100%;
height: 10%;
background-color: rgb(64, 64, 65);
display: flex;
flex-direction: row;
}
#Home{
color: beige;
font-size: 30px;
padding:0 10px;
}
#About{
color: beige;
font-size: 30px;
padding:0 10px;
}
#logo{
width: 120px;
height: 120px;
position: absolute;
right: 5%;
}
</style>