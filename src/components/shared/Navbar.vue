<template>
 <!--Navbar-->
          <nav class="navbar navbar-expand-lg navbar-dark  nav-fill shadow-lg p-3 mb-5 rounded">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><strong>savoir-faire</strong></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item">
                    <router-link to="/">Home</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/skills">Skills</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/work">My work</router-link>
                  </li>
                  <li class="nav-item">
                    <router-link to="/contact">Contact me</router-link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <!-- Navbar -->
</template>
