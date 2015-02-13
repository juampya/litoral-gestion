dataSource:"db:/sistemas/foa_bancos_sucursales",
items:[
{
labelFor:"banco_suc_codigo",
location:"39,97",
name:"banco_suc_codigo_label",
size:"127,20",
styleClass:"label_black",
text:"Código:",
typeid:7,
uuid:"188765C9-10ED-40CC-912D-2D563F003C6E"
},
{
formIndex:30,
location:"39,173",
size:"127,20",
styleClass:"label_black",
text:"Departamento:",
typeid:7,
uuid:"2806E8CC-398D-4310-B376-B970CC4AC0A0"
},
{
formIndex:30,
location:"326,173",
size:"71,20",
styleClass:"label_black",
text:"Provincia:",
typeid:7,
uuid:"378EAF27-11C1-4D4F-9471-3E12B7BD585E"
},
{
dataProviderID:"localidad_id",
displayType:10,
location:"168,147",
name:"localidad_id",
size:"353,20",
typeid:4,
uuid:"4DF9F981-7537-4F04-B5F0-F26661EE3AA5",
valuelistID:"5D57F02C-E6E9-435F-BE85-C5087CDF4A98"
},
{
dataProviderID:"banco_suc_codigo",
horizontalAlignment:0,
location:"168,97",
name:"banco_suc_codigo",
size:"43,20",
typeid:4,
uuid:"641266B2-04F0-404F-BAA8-941CF916B8F5"
},
{
dataProviderID:"banco_suc_id",
editable:false,
horizontalAlignment:0,
location:"168,47",
name:"banco_suc_id",
size:"43,20",
styleClass:"disable",
typeid:4,
uuid:"683B3908-4CC3-4CC8-808D-470F2AD9B02B"
},
{
labelFor:"banco_suc_id",
location:"39,47",
name:"banco_suc_id_label",
size:"127,20",
styleClass:"label_black",
text:"ID:",
typeid:7,
uuid:"6EA8B25F-50FD-4936-ABF5-9B7D1AD42C61"
},
{
labelFor:"banco_suc_nombre",
location:"39,122",
name:"banco_suc_nombre_label",
size:"127,20",
styleClass:"label_black",
text:"Descripción:",
typeid:7,
uuid:"72C907FB-E432-4078-8429-D6AFAD977987"
},
{
anchors:11,
displaysTags:true,
location:"0,0",
size:"556,31",
styleClass:"sub_banner",
text:"Alta de Sucursales de Bancos",
transparent:true,
typeid:7,
uuid:"760E823E-D9E2-4DB8-B6EB-D08BB6B9CDE8"
},
{
formIndex:3,
horizontalAlignment:2,
imageMediaID:"5C432BE9-5CB5-48FB-A4BE-25A25C33D471",
location:"297,284",
mediaOptions:1,
onActionMethodID:"9A1AC75E-E705-457C-9CC1-490BF01E38E9",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"Grabar",
typeid:7,
uuid:"7C44D955-64BD-47D0-A62C-20CE8DF884C6"
},
{
dataProviderID:"banco_suc_observa",
displayType:1,
location:"39,219",
name:"banco_suc_observa",
scrollbars:32,
size:"482,43",
typeid:4,
uuid:"7C66AF2B-783D-4401-8060-B772AB12B9F2"
},
{
height:330,
partType:5,
typeid:19,
uuid:"7F36397C-2DFB-468E-A9D1-69C9F1E53844"
},
{
labelFor:"banco_id",
location:"39,72",
name:"banco_id_label",
size:"127,20",
styleClass:"label_black",
text:"Banco:",
typeid:7,
uuid:"85C8199F-7CCB-4747-B544-EF377D8FE023"
},
{
formIndex:2,
horizontalAlignment:2,
imageMediaID:"B59F00BB-DE87-490B-92E9-55F93601EEA5",
location:"180,284",
mediaOptions:1,
onActionMethodID:"4420547F-919B-4DBD-ABBD-453B4DF60DB7",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"105,30",
text:"Vovler",
typeid:7,
uuid:"8608C6CA-0387-4AEC-9068-C9842A9B780D"
},
{
dataProviderID:"foa_bancos_sucursales_to_localidades.localidades_to_departamentos.departamentos_to_provincias.provincia_nombre",
editable:false,
formIndex:85,
location:"399,173",
size:"122,20",
styleClass:"disable",
typeid:4,
uuid:"8617752F-5009-4923-9616-860C285279C5"
},
{
dataProviderID:"banco_id",
editable:false,
location:"168,72",
name:"banco_id",
size:"353,20",
styleClass:"disable",
typeid:4,
uuid:"89577A6E-3189-40C0-ADDE-7BCD40DDFBA9",
valuelistID:"B814FA5E-6511-4796-82C2-264D1F9E84DB"
},
{
dataProviderID:"banco_suc_nombre",
location:"168,122",
name:"banco_suc_nombre",
size:"353,20",
typeid:4,
uuid:"8C076856-B4D3-4892-8DC7-674155B3E503"
},
{
horizontalAlignment:0,
labelFor:"banco_suc_observa",
location:"39,198",
name:"banco_suc_observa_label",
size:"482,20",
styleClass:"label_black",
text:"Observaciones",
typeid:7,
uuid:"C16C5708-4245-4F2D-986A-28F148E4EB21"
},
{
labelFor:"localidad_id",
location:"39,147",
name:"localidad_id_label",
size:"127,20",
styleClass:"label_black",
text:"Localidad:",
typeid:7,
uuid:"DB135D1C-C619-4875-9DED-F0439B32ED0A"
},
{
dataProviderID:"foa_bancos_sucursales_to_localidades.localidades_to_departamentos.depar_descripcion",
editable:false,
formIndex:85,
location:"168,173",
size:"150,20",
styleClass:"disable",
typeid:4,
uuid:"DECB641D-33EE-4571-970F-9A39F9A6C9BB"
}
],
name:"mat_bancos_sucursales_abm",
navigatorID:"-1",
onHideMethodID:"50363BF8-A606-4734-A4F6-D54401F923BC",
onShowMethodID:"D088DD57-E2A3-4A7C-9412-F42BCCB70452",
showInMenu:true,
size:"556,330",
styleClass:"formulario",
styleName:"id_style",
typeid:3,
uuid:"266E67DF-37DE-4FFC-B7E3-ABC2B593EE72"