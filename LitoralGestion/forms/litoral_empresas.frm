dataSource:"db:/sistemas/empresas",
extendsID:"-1",
items:[
{
anchors:11,
location:"0,39",
size:"640,9",
styleClass:"banner",
transparent:true,
typeid:7,
uuid:"0EF67A52-6E6E-4264-82DA-F1169FA3A9A9"
},
{
horizontalAlignment:0,
labelFor:"cuit",
location:"332,119",
size:"125,20",
styleClass:"label_black",
text:"Nro.CUIT",
typeid:7,
uuid:"1BA06DE0-63CF-4129-B41C-72DBB3C745E5"
},
{
borderType:"EmptyBorder,0,0,0,0",
location:"0,139",
mediaOptions:1,
onActionMethodID:"9EE0DEC6-73FC-4159-9C36-B55DF6B194E2",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"23,20",
transparent:true,
typeid:7,
uuid:"1DCD8DC1-F913-450E-9339-93422ACDEA43"
},
{
height:406,
partType:5,
typeid:19,
uuid:"4840B3D9-7E89-44F9-B575-C72042C13C3E"
},
{
horizontalAlignment:0,
labelFor:"emp_id",
location:"23,119",
name:"emp_id_label",
size:"85,20",
styleClass:"label_black",
text:"Empresa",
typeid:7,
uuid:"58B1FEC7-172B-4D3E-9690-4802A7CBD817"
},
{
location:"23,58",
size:"89,20",
styleClass:"label_black",
text:"Cod.Empresa",
typeid:7,
uuid:"67DDD75E-C6D9-4853-B89F-E0BFB5B291FD"
},
{
height:113,
partType:1,
typeid:19,
uuid:"6F76A9F2-A144-4614-8F49-2CD070E4F16F"
},
{
anchors:11,
dataProviderID:"emp_id",
editable:false,
format:"#",
horizontalAlignment:0,
location:"23,139",
name:"emp_id",
size:"85,20",
text:"Emp Id",
typeid:4,
uuid:"7BA23D6D-D1B3-4803-BE59-B13198234910"
},
{
labelFor:"emp_observa",
location:"458,119",
name:"emp_observa_label",
size:"182,20",
styleClass:"label_black",
text:"Observaciones",
typeid:7,
uuid:"7CD4C4F6-A46F-48DC-A69F-6E91D4E356A1"
},
{
anchors:11,
dataProviderID:"emp_nombre",
editable:false,
location:"107,139",
name:"emp_nombre",
size:"226,20",
text:"Emp Nombre",
typeid:4,
uuid:"8A008F9E-F51A-4196-B0D6-2CD71C98DF5A"
},
{
anchors:11,
dataProviderID:"emp_observa",
editable:false,
location:"458,139",
name:"emp_observa",
size:"182,20",
text:"Emp Observa",
typeid:4,
uuid:"B8CBAE4A-B8A7-45EA-8203-3C69AED2E77C"
},
{
anchors:11,
dataProviderID:"emp_nro_cuit",
editable:false,
horizontalAlignment:0,
location:"332,139",
name:"cuit",
size:"125,20",
typeid:4,
uuid:"D67A04B0-0F19-4108-97A4-40D1CE95C667"
},
{
labelFor:"emp_nombre",
location:"107,119",
name:"emp_nombre_label",
size:"226,20",
styleClass:"label_black",
text:"Nombre",
typeid:7,
uuid:"D6E6B363-D9D4-4D52-87EE-181D181B4905"
},
{
location:"153,10",
mediaOptions:1,
onActionMethodID:"2A9A33EC-B791-4548-B231-9E9EB196B767",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"120,30",
text:"Recargar",
typeid:7,
uuid:"DE438E1F-E517-491A-B272-6EFE072F92AE"
},
{
dataProviderID:"codigo",
location:"23,78",
onActionMethodID:"724E0F98-1EC0-4B49-AFD9-769059D2D168",
size:"89,20",
typeid:4,
uuid:"E6AFB434-B678-47A2-B789-03D32CBDFCE0"
},
{
location:"23,10",
mediaOptions:1,
onActionMethodID:"E7E3D233-6A00-436F-8D71-27F2D9BF9CA6",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"120,30",
text:"Volver",
typeid:7,
uuid:"ECE312CD-466C-4A2D-87B3-E0A164AC2C12"
},
{
dataProviderID:"nombre",
location:"122,78",
onActionMethodID:"724E0F98-1EC0-4B49-AFD9-769059D2D168",
size:"236,20",
typeid:4,
uuid:"F00F08A4-2503-499C-9DC0-A025CE271AD4"
},
{
location:"122,58",
size:"236,20",
styleClass:"label_black",
text:"Nombre Empresa",
typeid:7,
uuid:"FF265D4E-FD15-437D-83DB-5ED0676B6835"
}
],
name:"litoral_empresas",
onShowMethodID:"BC51CE18-0BD8-4881-A964-24EF6B5995D6",
showInMenu:true,
size:"643,406",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"54B627C6-6D4B-40C7-84CD-AD65F2B92089",
view:3