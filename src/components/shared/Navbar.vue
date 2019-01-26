<template>
 <!--Navbar-->
          <nav class="navbar navbar-expand-lg navbar-dark  nav-fill shadow-lg p-3 mb-5 rounded">
            <div class="container-fluid">
              <a class="navbar-brand" href="#"><strong>savoir-faire</strong></a>
              <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-7" aria-controls="navbarSupportedContent-7" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent-7">
                <ul class="navbar-nav w-100 nav-justified">
                    <router-link  to="/" tag="li" class="nav-item nav-link" active-class="active" exact><a class="text-light">Home</a></router-link>
                  

                    <router-link to="/skills" tag="li" class="nav-item nav-link" active-class="active"><a>My skills</a></router-link>
                  
                  
                    <router-link to="/work" tag="li" class="nav-item nav-link" active-class="active"><a>My work</a></router-link>
                  
                
                    <router-link to="/contact" tag="li" class="nav-item nav-link" active-class="active"><a>Contact me</a></router-link>
                  
                </ul>
              </div>
            </div>
          </nav>
          <!-- Navbar -->
</template>
