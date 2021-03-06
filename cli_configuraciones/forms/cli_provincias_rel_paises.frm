dataSource:"db:/sistemas/provincias",
items:[
{
labelFor:"provincia_cod_afip",
location:"140,65",
name:"provincia_cod_afip_label",
size:"140,20",
styleClass:"label_black",
text:"Cos. Afip:",
typeid:7,
uuid:"101DFAE6-972D-4DB2-8FB7-E2808EC33377"
},
{
height:317,
partType:5,
typeid:19,
uuid:"77C20F5C-9C19-416F-A81A-8E5527119E08"
},
{
anchors:11,
dataProviderID:"provincia_cod_afip",
editable:false,
location:"140,85",
name:"provincia_cod_afip",
size:"140,20",
typeid:4,
uuid:"8C087FDB-D0A9-418C-A9B0-EB5DDCD9CD2F"
},
{
height:58,
partType:1,
typeid:19,
uuid:"90EB2AEB-A8A4-4818-A076-DCD3AD6C51D9"
},
{
anchors:11,
fontType:"Verdana,1,16",
location:"0,0",
size:"640,50",
styleClass:"banner",
text:"Provincias",
transparent:true,
typeid:7,
uuid:"9A078358-592B-43C3-8939-94D6BF8D1D26"
},
{
anchors:11,
dataProviderID:"provincia_nombre",
editable:false,
location:"0,85",
name:"provincia_nombre",
size:"140,20",
typeid:4,
uuid:"B0FE9757-FA23-4B31-BF73-161D057397CC"
},
{
labelFor:"provincia_nombre",
location:"0,65",
name:"provincia_nombre_label",
size:"140,20",
styleClass:"label_black",
text:"Provincia:",
typeid:7,
uuid:"CDD1C96C-BDE2-4DBC-A73B-769D349387D5"
}
],
name:"cli_provincias_rel_paises",
navigatorID:"-1",
showInMenu:true,
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"D466B585-C5E7-400E-AD68-7D447598BEF3",
view:3