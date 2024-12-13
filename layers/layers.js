var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Formationsgeologiques_1 = new ol.format.GeoJSON();
var features_Formationsgeologiques_1 = format_Formationsgeologiques_1.readFeatures(json_Formationsgeologiques_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Formationsgeologiques_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Formationsgeologiques_1.addFeatures(features_Formationsgeologiques_1);
var lyr_Formationsgeologiques_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Formationsgeologiques_1, 
                style: style_Formationsgeologiques_1,
                popuplayertitle: 'Formations geologiques',
                interactive: false,
    title: 'Formations geologiques<br />\
    <img src="styles/legend/Formationsgeologiques_1_0.png" /> Formations effusives<br />\
    <img src="styles/legend/Formationsgeologiques_1_1.png" /> Formations plutoniques<br />\
    <img src="styles/legend/Formationsgeologiques_1_2.png" /> Formations précambriennes<br />\
    <img src="styles/legend/Formationsgeologiques_1_3.png" /> Formations sédimentaires<br />'
        });
var format_failles_2 = new ol.format.GeoJSON();
var features_failles_2 = format_failles_2.readFeatures(json_failles_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_failles_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_failles_2.addFeatures(features_failles_2);
var lyr_failles_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_failles_2, 
                style: style_failles_2,
                popuplayertitle: 'failles',
                interactive: false,
    title: 'failles<br />\
    <img src="styles/legend/failles_2_0.png" /> Réelle<br />\
    <img src="styles/legend/failles_2_1.png" /> Supposée<br />'
        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Formationsgeologiques_1.setVisible(true);lyr_failles_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Formationsgeologiques_1,lyr_failles_2];
lyr_Formationsgeologiques_1.set('fieldAliases', {'gid': 'gid', 'objectid': 'objectid', 'id': 'id', 'groupe': 'groupe', 'lithologie': 'lithologie', 'type_2': 'Type', 'ensemble_2': 'ensemble_2', 'shape_leng': 'shape_leng', 'shape_area': 'shape_area', });
lyr_failles_2.set('fieldAliases', {'gid': 'gid', 'id': 'id', 'type': 'type', });
lyr_Formationsgeologiques_1.set('fieldImages', {'gid': 'TextEdit', 'objectid': 'TextEdit', 'id': 'Hidden', 'groupe': 'TextEdit', 'lithologie': 'TextEdit', 'type_2': 'TextEdit', 'ensemble_2': 'TextEdit', 'shape_leng': 'TextEdit', 'shape_area': 'Hidden', });
lyr_failles_2.set('fieldImages', {'gid': 'TextEdit', 'id': 'TextEdit', 'type': 'TextEdit', });
lyr_Formationsgeologiques_1.set('fieldLabels', {'gid': 'hidden field', 'objectid': 'hidden field', 'groupe': 'header label - always visible', 'lithologie': 'inline label - visible with data', 'type_2': 'hidden field', 'ensemble_2': 'inline label - visible with data', 'shape_leng': 'hidden field', });
lyr_failles_2.set('fieldLabels', {'gid': 'no label', 'id': 'no label', 'type': 'no label', });
lyr_failles_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});