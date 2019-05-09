$(document).ready(function(){
  
  const ninos = ()=>{
    $("#si").click(function(){
        $(".ninos").show();
        $(".ninas").show();
    })
    
    $("#no").click(function(){
        $(".ninos").hide();
        $(".ninas").hide();
    })
  }

  ninos();

  const pasaporte = ()=>{
      $("#pasaporte").click(function(){
           let pass = $(this).val();
          if(pass == 'true'){
              $(".vencimiento-pass").show();
          }else{
              $(".vencimiento-pass").hide();
          }
      })
  }

  pasaporte();

 /**mostar estados y parroquias */

  const lugares =(lugar1,lugar2)=>{
      $(lugar1).on('click',function(){
            $(lugar2).show();
            let estadove = $(this).val();
            localStorage.setItem('estadove',estadove);
      })
  }
   /**venezuela*/
  lugares("#estado-ve",".municipio");
  lugares("#municipio-ve",".parroquia");

  /**brasil*/
  lugares("#estado-br",".municipio-br");
  lugares("#municipio-br",".parroquia-br")

  /** -------------------------------*/
  
  venezuelaES();
    function venezuelaES(){
        $.ajax({
            url:"./venezuela.json",
            data:"GET",
            dataType:"JSON",
            success:function(pais){
                for (let i = 0; i < pais.length; i++) {
                    $("#estado-ve").append(`<option value='${pais[i].estado}' index='${pais[i].id_estado}'>${pais[i].estado}</option>`);  
                }
            }
        });
    }
    
  /** */

  brasilES();
    function brasilES(){
        $.ajax({
            url:"./brasil.json",
            data:"GET",
            dataType:"JSON",
            success:function(pais){
                console.log(pais)
               for (let i = 0; i < pais[0].estados.length; i++) {
                $("#estado-br").append(`<option value='${pais[0].estados[i].nome}' sigla='${pais[0].estados[i].sigla}'>${pais[0].estados[i].nome}</option>`); 
               }
            }
        });
    }
    
 





/*fin del archvo* */
})
