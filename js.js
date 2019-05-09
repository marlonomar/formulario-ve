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


const ocutarCiudades = ()=>{
    const lugares =(lugar1,lugar2)=>{
        $(lugar1).on('click',function(){
              $(lugar2).show();
        })
    }
  
    lugares("#estado-ve",".municipio");
    lugares("#municipio-ve",".parroquia");
    lugares("#estado-br",".cidade-br");
}
ocutarCiudades();

const callJson = ()=>{
    venezuelaES();
function venezuelaES(){
    $.ajax({
        url:"./venezuela.json",
        data:"GET",
        dataType:"JSON",
        success:(pais)=>{
           
            for (let i = 0; i < pais.length; i++) {
                $("#estado-ve").append(`<option value='${pais[i].id_estado}'>${pais[i].estado}</option>`);  
            }

            $(document).on('change',"#estado-ve",function(){
                var municipio = $(this).val();
                $("#municipio-ve").empty();
                for (let i = 0; i < pais[municipio -1].municipios.length; i++) {
                    $("#municipio-ve").append(`<option value='${[i]}'>${pais[municipio -1].municipios[i].municipio}</option>`);  
                }
            })

            $(document).on('change',"#municipio-ve",function(){
                let estados = parseInt($("#estado-ve").val());
                let municipio = parseInt($("#municipio-ve").val());
                $("#parroquia-ve").empty();
                for (let i = 0; i < pais[estados -1].municipios[municipio].parroquias.length; i++) {
                    $("#parroquia-ve").append(`<option value='${[i]}'>${pais[estados -1].municipios[municipio].parroquias[i]}</option>`);  
                }
            })

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
        success:(pais)=>{
           for (let i = 0; i < pais[0].estados.length; i++) {
            $("#estado-br").append(`<option value='${i}' sigla='${pais[0].estados[i].sigla}'>${pais[0].estados[i].nome}</option>`); 
           }

           $(document).on('change',"#estado-br",function(){
            var cidade = parseInt($(this).val())
            $("#cidade-br").empty();
            for (let i = 0; i < pais[0].estados[cidade].cidades.length; i++) {
                $("#cidade-br").append(`<option value='${[i]}'>${pais[0].estados[cidade].cidades[i]}</option>`);  
            }

        })
        }
    });
}




}
callJson();





/*fin del archvo* */
})
