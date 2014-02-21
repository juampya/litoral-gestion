dataSource:"db:/sistemas/mat_movimientos",
items:[
{
height:155,
partType:1,
typeid:19,
uuid:"0545EE30-B877-4A12-80B6-382C3C58C01A"
},
{
imageMediaID:"BF1011D8-5F37-4FBC-84C9-6B464492EB6A",
location:"10,181",
onActionMethodID:"91146CF6-686A-4E8C-AD95-DA845CE5BD27",
showClick:false,
size:"16,16",
text:"",
typeid:7,
uuid:"27F3F05C-83D2-4013-9791-9B4E015C97F2"
},
{
height:490,
partType:8,
typeid:19,
uuid:"366D62BF-1FAA-41C0-B6F8-E5729BC4D800"
},
{
horizontalAlignment:2,
labelFor:"vl_matriculado_id",
location:"39,109",
name:"vl_matriculado_id_label",
size:"371,20",
styleClass:"label_black",
text:"Matriculado",
typeid:7,
uuid:"7C184417-A6D2-49FD-A15F-DBF1D76BE1B0"
},
{
anchors:11,
horizontalAlignment:2,
labelFor:"mov_descripcion",
location:"259,161",
name:"mov_descripcion_label",
size:"197,20",
styleClass:"label_black",
text:"Descripcion",
typeid:7,
uuid:"80D75E89-1481-437D-940C-AFF00C806D62"
},
{
anchors:11,
dataProviderID:"mov_importe",
editable:false,
format:"#,###.00",
horizontalAlignment:4,
location:"456,181",
name:"mov_importe",
size:"140,20",
text:"Mov Importe",
typeid:4,
uuid:"84AFA8BF-54CC-4BDE-8071-B9721A6BF34B"
},
{
anchors:11,
horizontalAlignment:2,
labelFor:"mov_mes_emision",
location:"36,161",
name:"mov_mes_emision_label",
size:"140,20",
styleClass:"label_black",
text:"Mes Emision",
typeid:7,
uuid:"8512256C-1C6F-461F-A81B-116C2D0F0898"
},
{
anchors:11,
horizontalAlignment:2,
labelFor:"mov_anio_emision",
location:"176,161",
name:"mov_anio_emision_label",
size:"83,20",
styleClass:"label_black",
text:"Año Emision",
typeid:7,
uuid:"86A9997A-ABCA-492B-AC9B-FA3DE184BDF7"
},
{
anchors:11,
dataProviderID:"mov_anio_emision",
editable:false,
horizontalAlignment:4,
location:"176,181",
name:"mov_anio_emision",
size:"83,20",
text:"Mov Anio Emision",
typeid:4,
uuid:"93E3722E-3C07-44AF-9617-71A84C57F4DB"
},
{
anchors:11,
location:"0,0",
size:"999,103",
styleClass:"banner",
text:"Detalle de Saldo",
transparent:true,
typeid:7,
uuid:"95BA4AFB-4D74-4486-8062-675C368104CE"
},
{
anchors:11,
dataProviderID:"mov_descripcion",
editable:false,
location:"259,181",
name:"mov_descripcion",
size:"197,20",
text:"Mov Descripcion",
typeid:4,
uuid:"987BCB7C-9B50-4014-9FD4-43CF6E4D1890"
},
{
height:448,
partType:5,
typeid:19,
uuid:"9E6DEFB3-DA22-498F-B5CD-2947A49D9E93"
},
{
anchors:11,
horizontalAlignment:2,
labelFor:"mov_importe",
location:"456,161",
name:"mov_importe_label",
size:"140,20",
styleClass:"label_black",
text:"Importe",
typeid:7,
uuid:"C6AC509D-9371-4CF3-83C1-5A4324DC8AC2"
},
{
anchors:11,
location:"0,452",
size:"999,38",
styleClass:"banner_pie",
transparent:true,
typeid:7,
uuid:"CA4CD186-F110-4EDA-9A17-F11204B2D35C"
},
{
anchors:11,
dataProviderID:"mov_mes_emision",
editable:false,
location:"36,181",
name:"mov_mes_emision",
size:"140,20",
text:"Mov Mes Emision",
typeid:4,
uuid:"E2C03A91-D9DC-40A2-9B58-E077A45F9713",
valuelistID:"D30961D6-B67C-49E0-87BD-6E7EEBD46F2A"
},
{
background:"#ffff9f",
dataProviderID:"vl_matriculado_id",
editable:false,
location:"39,129",
name:"vl_matriculado_id",
size:"371,20",
text:"Vl Matriculado Id",
typeid:4,
uuid:"E3ECE97D-1D12-4A62-80D9-30F33E9CB264",
valuelistID:"F6D88DD2-B460-48B8-9EC5-BF53D194215F"
},
{
location:"28,47",
onActionMethodID:"082C7DA2-E53D-41AB-84F0-81D6707D494B",
onDoubleClickMethodID:"-1",
onRightClickMethodID:"-1",
size:"130,30",
text:"Volver",
typeid:7,
uuid:"F122AC14-AF69-4BF5-A04F-C9680ECF6698"
}
],
name:"mat_saldos_globales_movimientos",
navigatorID:"-1",
onShowMethodID:"F3AEDEC5-EADA-4E5F-A40D-2D094CF9CCA0",
showInMenu:true,
size:"999,480",
styleClass:"table",
styleName:"id_style",
typeid:3,
uuid:"AAC48150-3973-4029-B626-CD96CA37100D",
view:3