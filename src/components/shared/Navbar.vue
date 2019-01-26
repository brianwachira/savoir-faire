<template>
 <!--Navbar-->
          <nav class="navbar navbar-expand-lg navbar-dark shadow-lg p-3 mb-5">
            <div class="container-fluid">
              <router-link to="/" tag="div"><a class="navbar-brand"><strong>savoir-faire</strong></a></router-link>
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
