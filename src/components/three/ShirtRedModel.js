import React from "react";
const THREE = require("three");
const OrbitControls = require("three-orbitcontrols");
var FBXLoader = require("threejs-fbxloader");

class Scene extends React.Component {
    componentDidMount() {
        //-----------------------------------------------------
        //Scene
        let scene = new THREE.Scene();

        //-----------------------------------------------------
        //Camera
        this.camera = new THREE.PerspectiveCamera(
            75,
            this.mount.offsetWidth / this.mount.offsetHeight,
            0.1,
            1000
        );
        this.camera.position.set(0, 0, 2.2);

        //-----------------------------------------------------
        //Renderer
        this.renderer = new THREE.WebGLRenderer({
            alpha: false
        });
        this.renderer.setSize(this.mount.offsetWidth, this.mount.offsetHeight);
        this.renderer.setClearColor(0, 0);
        this.mount.appendChild(this.renderer.domElement);

        //-----------------------------------------------------
        //Controls
        const controls = new OrbitControls(
            this.camera,
            this.renderer.domElement
        );
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enableZoom = false;
        controls.keys = false;
        controls.rotateSpeed = 0.5;
        controls.enablePan = false;
        controls.target.set(0, 0, 0);
        controls.update();

        const light = new THREE.HemisphereLight(0xffffff, 0x444444);
        light.position.set(0, 200, 0);
        scene.add(light);

        

        //-----------------------------------------------------
        //Loader
        const loadingManager = new THREE.LoadingManager(() => {
            const loadingScreen = document.getElementById("loading-screen");
            const canvas = document.getElementById("canvas");
            loadingScreen.classList.add("fade-out");
            canvas.classList.add("loaded");

            // optional: remove loader from DOM via event listener
            loadingScreen.addEventListener("transitionend", "onTransitionEnd");
        });

        //-----------------------------------------------------
        //Shoe model
       // FBXLoader(THREE);
       // var loader = new THREE.FBXLoader(loadingManager);
      //  const object = null;
       // loader.load(require("./model/shoeproper.fbx"),

        //    function(object) {
                
          //      object.position.x += 0;
          //      object.position.y += 0;
             //   object.position.z += 0;
            //    object.rotation.y = -1;
            //    object.rotation.y = -1;

             //   scene.add(object);
  
          //  }
       // );
        
      //  FBXLoader(THREE);
      
        //const patch = null;
       // loader.load(
         //   require("./model/strips.fbx"),

         //   function(patch) {
         //       patch.traverse(function(child) {
          //          if (child.isMesh) {
                        
            //            child.material = new THREE.MeshBasicMaterial({ flatShading: false  });
           //         }
             //   });
            //    patch.position.x += 0;
             //   patch.position.y += 0;
              //  patch.position.z += 0;
              //  patch.rotation.y = -1;
               

              //  scene.add(patch);
                
        
            //}
            
       // );

        //-----------------------------------------------------
        //Animation
        this.animate = function() {
            requestAnimationFrame(this.animate.bind(this));
            this.renderer.render(scene, this.camera);
        };

        this.animate();
        window.addEventListener(
            "resize",
            this.onWindowResize.bind(this),
            false
        );
    }

    onWindowResize() {
        if (this.mount) {
            this.camera.aspect =
                this.mount.offsetWidth / this.mount.offsetHeight;
            this.camera.updateProjectionMatrix();
            this.renderer.setSize(
                this.mount.offsetWidth,
                this.mount.offsetHeight
            );
        }
    }
    
    render() {
        
        return (
            <div id="shoe-container">
                <section id="loading-screen">
                    <div className="lds-heart">
                        <div></div>
                    </div>
                </section>
                <div id="canvas" ref={ref => (this.mount = ref)}></div>
            </div>
        );
    }
}

export default Scene;
