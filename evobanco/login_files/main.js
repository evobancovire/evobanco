function rellenarPlazosHipoteca(){for(var e="",a=$('input[type="range"].range-cuota').val(),o="",t=1;30>=t;t++)e+='<option value="'+t+'">'+t+" años</option>";$("#plazosHipo").empty(),$("#plazosHipo").append(e),$("#plazosHipo option:eq("+(a-1)+")").prop("selected",!0),o=$("#plazosHipo option:selected").text(),$(".select_label span").text(o)}function rellenarTeclado(e){for(var a=[0,1,2,3,4,5,6,7,8,9],o=_.shuffle(a),t=0;t<o.length;t++)$(".value-key").eq(t).text(o[t])}jQuery(document).ready(function(e){if(e(".wr-accesos .dropdown").on("click",function(){e(".wr-accesos .dropdown ul").slideToggle(),e(this).toggleClass("open")}),e(".wr-accesos button").on("click",function(){event.stopPropagation(),e(".wr-accesos ul").toggle()}),e(document).mouseup(function(a){if(document.body.clientWidth<767){var o=e(".wr-accesos ul");o.is(a.target)||0!==o.has(a.target).length||o.hide()}}),e(".nombre-producto i").on("click",function(){e(this).toggleClass("fa-plus-circle").toggleClass("fa-minus-circle"),e(this).parents(".wr-producto").children(".opciones").slideToggle()}),e("#multistep-ci li, #multistep-hi li").each(function(){return e(this).hasClass("active")?!1:void e(this).addClass("visited")}),e(".dropdown").find("li").hasClass("active")&&(e(".dropdown").addClass("open"),e(".wr-menu-left .fa").removeClass("fa-plus").addClass("fa-minus"),document.body.clientWidth<767&&e("#main-content").css("margin-top","100px")),e(".wr-menu-left .dropdown-toggle").on("click",function(){e(this).children().toggleClass("fa-plus").toggleClass("fa-minus")}),e("#ciform #trabajo").change(function(){var a=e("#trabajo").val();e("#notaCuentaAjena, #notaFuncionario").parents(".form-group").addClass("hidden"),"CuentaAjena"==a&&e("#notaCuentaAjena").parents(".form-group").removeClass("hidden"),"Funcionario"==a&&e("#notaFuncionario").parents(".form-group").removeClass("hidden")}),e("#ciform #fchaNac-Dia, #ciform #fchaNac-Mes, #ciform #fchaNac-Anno").change(function(){var a=e("#fchaNac-Dia option:selected").text(),o=e("#fchaNac-Mes").val(),t=e("#fchaNac-Anno option:selected").text(),i=new Date(t,o,a);if(""!=i)var s=new Date,n=Math.floor((s-i)/315576e5);25>=n?e("#notaCuentaJoven").parents(".form-group").removeClass("hidden"):e("#notaCuentaJoven").parents(".form-group").addClass("hidden")}),e("#ciform #sexo, .form-hi #sexo").change(function(){e("#segundo-bloque").show(),e("#despues-segundo-bloque").empty()}),e(".form-hi #numero").change(function(){e(this).val().length>0&&(e("#tercer-bloque").show(),e("#despues-tercer-bloque").empty())}),e("input:radio[name=tipo-documento]").change(function(){e("#numDocu").prop("disabled",!1)}),e(".error-msg").hide(),e("input, textarea, select").each(function(){e(this).hasClass("error")&&e(this).siblings(".error-msg").show()}),e("#ciform-acceso #submit-tel").on("click",function(){0!=e("#ciform-acceso #telefono").val().length&&(e(this).parents("fieldset").children(".verify").removeClass("hidden"),e(this).hide())}),e("#ciform-acceso #submit-email").on("click",function(){0!=e("#ciform-acceso #email").val().length&&(e(this).parents("fieldset").children(".verify").removeClass("hidden"),e(this).hide(),e("#ciform-acceso #codpostal").prop("disabled",!1))}),document.body.clientWidth<767&&(e("#calc-first").appendTo(".hi-section.first-section"),e("#calc-second").appendTo(".hi-section.second-section"),e("#calc-third").appendTo(".hi-section.third-section")),e(".hi-section a").on("click",function(a){if(e(this).hasClass("active"))document.body.clientWidth<767&&(e(".hi-section a").removeClass("active"),e(".hi-section a h3 i").removeClass("fa-angle-up").addClass("fa-angle-down"),e(".hi-section form").hide(),e(".calculadora .resultado").hide());else{e(".hi-section a").removeClass("active"),e(this).addClass("active"),e(".hi-section a h3 i").removeClass("fa-angle-up").addClass("fa-angle-down"),e(this).children("h3").children("i").removeClass("fa-angle-down").addClass("fa-angle-up");var o=e(this).attr("href");e(".calculadora form, .calculadora .resultado").hide(),e(o+" form").slideDown()}}),e(".calculadora .btn-pink").on("click",function(){e(this).parents(".calculadora").find(".resultado").slideDown()}),e("#multistep-hi li").each(function(){e(this).hasClass("active")&&e(this).children("i").removeClass("fa-circle").addClass("fa-male")}),e(".wr-check-vivienda").on("click",function(){e(".img-box").removeClass("checked"),e('input[type="radio"]').prop("checked",!0),e(this).children(".img-box").addClass("checked"),e(this).children('input[type="radio"]').prop("checked",!0)}),e('input[name="hi-compartida"]').on("click",function(){"no-compartida"==e('input[name="hi-compartida"]:checked').val()&&(e("#si-compartida-edad").addClass("hidden"),e("#no-compartida-edad").removeClass("hidden")),"si-compartida"==e('input[name="hi-compartida"]:checked').val()&&(e("#no-compartida-edad").addClass("hidden"),e("#si-compartida-edad").removeClass("hidden"))}),e("input[name=endeudamiento]").on("click",function(){"no"!=e(this).val()?(e(this).parents(".wr-endeudamiento").children(".endeudamiento-gastos").toggleClass("hidden"),e('.endeudamiento-no input[type="checkbox"]').prop("checked",!1)):(e(".endeudamiento-gastos").addClass("hidden"),e('.wr-endeudamiento input[type="checkbox"]').prop("checked",!1))}),e(".panel-seguro").on("click",function(){e(this).hasClass("seguro-hogar")||e(this).parent().toggleClass("active")}),e("select[name=tipo-documento]").change(function(){"nie"==e("select[name=tipo-documento]").val()?e("#datos-tarjResi").removeClass("hidden"):e("#datos-tarjResi").addClass("hidden")}),e("input[name=tipo-documento]").on("click",function(){"tarjResi"==e("input:radio[name=tipo-documento]:checked").val()?e("#datos-tarjResi").removeClass("hidden"):e("#datos-tarjResi").addClass("hidden")}),e("input:radio[name=doc-extranjero]").change(function(){e("#num-doc").prop("disabled",!1),e("#lugar-exp").prop("disabled",!1)}),e("#sexo").change(function(){"mujer"==e(this).val()||"hombre"==e(this).val()?(e("#despues-segundo-bloque").fadeOut("slow",function(){e("#despues-segundo-bloque").addClass("hidden")}),e(".segundo-bloque").fadeIn("slow",function(){e(".segundo-bloque").removeClass("hidden")}),e("#despues-tercer-bloque").fadeIn("slow",function(){e("#despues-tercer-bloque").fadeIn("hidden")})):(e("#despues-tercer-bloque").fadeOut("slow",function(){e("#despues-tercer-bloque").addClass("hidden")}),e(".segundo-bloque").fadeOut("slow",function(){e(".segundo-bloque").addClass("hidden")}),e("#despues-segundo-bloque").fadeIn("slow",function(){e("#despues-segundo-bloque").removeClass("hidden")}))}),e("#numeroPortal").focusout(function(){e("#numeroPortal").val().length>0&&(e("#despues-tercer-bloque").fadeOut("slow",function(){e("#despues-tercer-bloque").addClass("hidden")}),e(".tercer-bloque").fadeIn("slow",function(){e(".tercer-bloque").removeClass("hidden")}))}),e("#estado-civil").change(function(){"02"==e(this).val()||"07"==e(this).val()?e(".regimen-matrimonial").removeClass("hidden"):e(".regimen-matrimonial").addClass("hidden"),"06"==e(this).val()?e(".gastos-pension").removeClass("hidden"):e(".gastos-pension").addClass("hidden")}),e("#sit-laboral").change(function(){"02"==e(this).val()||"03"==e(this).val()?e(".fecha-baja").removeClass("hidden"):e(".fecha-baja").addClass("hidden"),"06"==e(this).val()?e(".nombre-empresa, .fecha-alta").addClass("hidden"):e(".nombre-empresa, .fecha-alta").removeClass("hidden"),"04"==e(this).val()||"05"==e(this).val()?e(".wr-autonomos").removeClass("hidden"):e(".wr-autonomos").addClass("hidden")}),e("#sit-vivienda").change(function(){"10"==e(this).val()||"01"==e(this).val()?e(".saldo-pendiente, .gasto-mensual").addClass("hidden"):e(".saldo-pendiente, .gasto-mensual").removeClass("hidden"),"15"==e(this).val()||"20"==e(this).val()||"99"==e(this).val()?e(".hipoteca-mantiene, .saldo-pendiente").addClass("hidden"):"10"==e(this).val()||"01"==e(this).val()?e(".hipoteca-mantiene").removeClass("hidden"):e(".hipoteca-mantiene, .saldo-pendiente").removeClass("hidden")}),e("input[name=otras-propiedades]").on("click",function(){"si"==e("input:radio[name=otras-propiedades]:checked").val()?(e("#wr-otras-propiedades").removeClass("hidden"),e(e.fn.dataTable.tables(!0)).DataTable().responsive.recalc()):e("#wr-otras-propiedades").addClass("hidden")}),e("input[name=otras-hipotecas]").on("click",function(){"si"==e("input:radio[name=otras-hipotecas]:checked").val()?(e("#wr-otras-hipotecas").removeClass("hidden"),e(e.fn.dataTable.tables(!0)).DataTable().responsive.recalc()):e("#wr-otras-hipotecas").addClass("hidden")}),e("input[name=otros-prestamos]").on("click",function(){"si"==e("input:radio[name=otros-prestamos]:checked").val()?(e("#wr-otros-prestamos").removeClass("hidden"),e(e.fn.dataTable.tables(!0)).DataTable().responsive.recalc()):e("#wr-otros-prestamos").addClass("hidden")}),e(".m_Form_HI_Cont #submit-tel").on("click",function(){0==e("#telMovil").val().length||isNaN(e("#telMovil").val())?(e("#telMovil").next("span").text("Debe usar un numero de telefono valido"),e("#telMovil").next("span").removeClass("hidden"),e("#telMovil").addClass("input-error")):(e("#telMovil").next("span").addClass("hidden"),e("#telMovil").removeClass("input-error"),e(".verify").removeClass("hidden"),e(this).hide())}),e("select").each(function(){"plazosHipo"==e("select").attr("id")&&rellenarPlazosHipoteca(),"required"==e(this).attr("required")&&(e(this).parent("div").prev("label").text().length>0?e(this).parent("div").prev("label").append('<span class="obligatorio">*</span>'):e(this).prev("label").text().length>0&&e(this).prev("label").append('<span class="obligatorio">*</span>'))}),e("#sit-laboral").change(function(){o=e("#profesion"),"01"==e("#sit-laboral").val()||"02"==e("#sit-laboral").val()||"03"==e("#sit-laboral").val()?selectPopulateAJAX("#profesion","profesion-fijo.json"):"04"==e("#sit-laboral").val()||"05"==e("#sit-laboral").val()?selectPopulateAJAX("#profesion","profesion-autonomo.json"):"06"==e("#sit-laboral").val()&&selectPopulateAJAX("#profesion","profesion-otros.json")}),e(".wr-range").length>0){var a="",o=e("#plazosHipo"),t=e("#slider-input").slider({min:1,max:30,range:"min",value:o[0].selectedIndex+1,slide:function(o,t){e("#plazosHipo option").removeAttr("selected"),e("#plazosHipo option[value="+t.value+"]").attr("selected",!0),a=e("#plazosHipo option:selected").text(),e(".select_label span").text(a),e("#output-range span.tiempo span.num").text(t.value)}});e("#plazosHipo").change(function(){t.slider("value",this.selectedIndex+1),e("#output-range span.tiempo span.num").text(this.selectedIndex+1)})}}),$(".value-key").click(function(e){$(".active-input").removeClass("input-error")}),$('input[type="text"],input[type="password"],input[type="number"]').click(function(e){$(".virtual_keyboard").removeClass("active")}),$(".active-input").click(function(e){$(window).width()>480&&($('input[type="text"],input[type="password"],input[type="number"]').removeClass("activeInput"),$(this).toggleClass("activeInput"),$(".active-input").hasClass("activeInput")?$(".virtual_keyboard").addClass("active"):$(".virtual_keyboard").removeClass("active"),rellenarTeclado()),$(window).width()<=480&&($('input[type="text"],input[type="password"],input[type="number"]').removeClass("activeInput"),$(this).toggleClass("activeInput"),$(".virtual_keyboard").appendTo(".virtual-box-keyboard"),$(".keyboard-box").removeClass("incluirTeclado"),$(".active-input").hasClass("activeInput")?($(this).next(".keyboard-box").toggleClass("incluirTeclado"),$(".virtual_keyboard").appendTo(".incluirTeclado"),$(".virtual_keyboard").addClass("active")):$(".virtual_keyboard").removeClass("active"),rellenarTeclado())}),$(".active-input-link").click(function(e){$(".virtual_keyboard").toggleClass("active")}),$(".keypad-close").click(function(e){$(window).width()>480&&($(".active-input").removeClass("activeInput"),$(".virtual_keyboard").removeClass("active")),$(window).width()<=480&&($(".virtual_keyboard").appendTo(".virtual-box-keyboard"),$(".keyboard-box").removeClass("incluirTeclado"),$(".active-input").removeClass("activeInput"),$(".virtual_keyboard").removeClass("active"))}),$(function(){$(".value-key").click(function(){var e=$(this).data("target");$(".activeInput").val().length>=$(".activeInput").attr("maxlength")||$(".activeInput").val($(e).val()+$(this).html())}),$(".delete-key").click(function(){$(this).data("target");$(".activeInput").val("")}),$(".debug-key").click(function(){$(this).data("target")})}),$("#OTPCorregir").on("click",function(){$("#InputOTPCorregir").val("")}),$(".modal-video-btn").click(function(){$(".modal-video iframe").attr("src",$(".modal-video iframe").attr("src"))});