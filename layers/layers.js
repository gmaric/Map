ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([-8711559.136333, 5635432.790369, -8699268.671672, 5643114.330783]);
var wms_layers = [];


        var lyr_ESRIWorldTopo_0 = new ol.layer.Tile({
            'title': 'ESRI World Topo',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://services.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_EsriWorldImagery_1 = new ol.layer.Tile({
            'title': 'Esri World Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://wiki.openstreetmap.org/wiki/Esri">Terms & Feedback</a>',
                url: 'https://services.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });
var format_Tributary_2 = new ol.format.GeoJSON();
var features_Tributary_2 = format_Tributary_2.readFeatures(json_Tributary_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Tributary_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Tributary_2.addFeatures(features_Tributary_2);
var lyr_Tributary_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Tributary_2, 
                style: style_Tributary_2,
                popuplayertitle: 'Tributary',
                interactive: true,
                title: '<img src="styles/legend/Tributary_2.png" /> Tributary'
            });
var format_TributaryPaul_3 = new ol.format.GeoJSON();
var features_TributaryPaul_3 = format_TributaryPaul_3.readFeatures(json_TributaryPaul_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_TributaryPaul_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_TributaryPaul_3.addFeatures(features_TributaryPaul_3);
var lyr_TributaryPaul_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_TributaryPaul_3, 
                style: style_TributaryPaul_3,
                popuplayertitle: 'Tributary (Paul)',
                interactive: true,
                title: '<img src="styles/legend/TributaryPaul_3.png" /> Tributary (Paul)'
            });
var format_FRIWetlands_4 = new ol.format.GeoJSON();
var features_FRIWetlands_4 = format_FRIWetlands_4.readFeatures(json_FRIWetlands_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_FRIWetlands_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_FRIWetlands_4.addFeatures(features_FRIWetlands_4);
var lyr_FRIWetlands_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_FRIWetlands_4, 
                style: style_FRIWetlands_4,
                popuplayertitle: 'FRI Wetlands',
                interactive: true,
                title: '<img src="styles/legend/FRIWetlands_4.png" /> FRI Wetlands'
            });
var format_AllenStraggleWetlands_5 = new ol.format.GeoJSON();
var features_AllenStraggleWetlands_5 = format_AllenStraggleWetlands_5.readFeatures(json_AllenStraggleWetlands_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AllenStraggleWetlands_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AllenStraggleWetlands_5.addFeatures(features_AllenStraggleWetlands_5);
var lyr_AllenStraggleWetlands_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AllenStraggleWetlands_5, 
                style: style_AllenStraggleWetlands_5,
                popuplayertitle: 'Allen Straggle Wetlands',
                interactive: true,
                title: '<img src="styles/legend/AllenStraggleWetlands_5.png" /> Allen Straggle Wetlands'
            });

lyr_ESRIWorldTopo_0.setVisible(true);lyr_EsriWorldImagery_1.setVisible(true);lyr_Tributary_2.setVisible(true);lyr_TributaryPaul_3.setVisible(true);lyr_FRIWetlands_4.setVisible(true);lyr_AllenStraggleWetlands_5.setVisible(true);
var layersList = [lyr_ESRIWorldTopo_0,lyr_EsriWorldImagery_1,lyr_Tributary_2,lyr_TributaryPaul_3,lyr_FRIWetlands_4,lyr_AllenStraggleWetlands_5];
lyr_Tributary_2.set('fieldAliases', {'fid': 'fid', 'Name': 'Name', 'Risk': 'Risk', 'Length (m)': 'Length (m)', 'Biological Signifigance': 'Biological Signifigance', 'Notes': 'Notes', });
lyr_TributaryPaul_3.set('fieldAliases', {'fid': 'fid', });
lyr_FRIWetlands_4.set('fieldAliases', {'fid': 'fid', });
lyr_AllenStraggleWetlands_5.set('fieldAliases', {'fid': 'fid', });
lyr_Tributary_2.set('fieldImages', {'fid': 'TextEdit', 'Name': 'TextEdit', 'Risk': 'TextEdit', 'Length (m)': 'TextEdit', 'Biological Signifigance': 'TextEdit', 'Notes': 'TextEdit', });
lyr_TributaryPaul_3.set('fieldImages', {'fid': 'TextEdit', });
lyr_FRIWetlands_4.set('fieldImages', {'fid': '', });
lyr_AllenStraggleWetlands_5.set('fieldImages', {'fid': '', });
lyr_Tributary_2.set('fieldLabels', {'fid': 'inline label - always visible', 'Name': 'no label', 'Risk': 'no label', 'Length (m)': 'inline label - always visible', 'Biological Signifigance': 'no label', 'Notes': 'no label', });
lyr_TributaryPaul_3.set('fieldLabels', {'fid': 'inline label - always visible', });
lyr_FRIWetlands_4.set('fieldLabels', {'fid': 'inline label - always visible', });
lyr_AllenStraggleWetlands_5.set('fieldLabels', {'fid': 'inline label - always visible', });
lyr_AllenStraggleWetlands_5.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});