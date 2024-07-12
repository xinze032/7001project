ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:3857").setExtent([12697084.471570, 2533037.112058, 12721132.617381, 2555848.496085]);
var wms_layers = [];


        var lyr_SkyMap_0 = new ol.layer.Tile({
            'title': 'Sky Map',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://t1.tianditu.gov.cn/vec_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=vec&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileCol={x}&TileRow={y}&TileMatrix={z}&tk=b0e5ec106781b4232d8e36c19a806fcf'
            })
        });

        var lyr_SkyMapMarker_1 = new ol.layer.Tile({
            'title': 'Sky Map-Marker',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://t3.tianditu.gov.cn/cva_w/wmts?SERVICE=WMTS&REQUEST=GetTile&VERSION=1.0.0&LAYER=cva&STYLE=default&TILEMATRIXSET=w&FORMAT=tiles&TileCol={x}&TileRow={y}&TileMatrix={z}&tk=b0e5ec106781b4232d8e36c19a806fcf'
            })
        });

        var lyr_Google_2 = new ol.layer.Tile({
            'title': 'Google',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'http://mt0.google.com/vt/lyrs=r&hl=en&x={x}&y={y}&z={z}'
            })
        });
var format_Prices_3 = new ol.format.GeoJSON();
var features_Prices_3 = format_Prices_3.readFeatures(json_Prices_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Prices_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Prices_3.addFeatures(features_Prices_3);
var lyr_Prices_3 = new ol.layer.Heatmap({
                declutter: false,
                source:jsonSource_Prices_3, 
                radius: 15 * 2,
                gradient: ['#fff5f0', '#fee0d2', '#fcbba1', '#fc9272', '#fb6a4a', '#ef3b2c', '#cb181d', '#a50f15', '#67000d'],
                blur: 15,
                shadow: 250,
    weight: function(feature){
        var weightField = 'Money';
        var featureWeight = feature.get(weightField);
        var maxWeight = 34000;
        var calibratedWeight = featureWeight/maxWeight;
        return calibratedWeight;
    },
                title: 'Prices'
            });
var format_Recreation_4 = new ol.format.GeoJSON();
var features_Recreation_4 = format_Recreation_4.readFeatures(json_Recreation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Recreation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Recreation_4.addFeatures(features_Recreation_4);
var lyr_Recreation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Recreation_4, 
                style: style_Recreation_4,
                popuplayertitle: "Recreation",
                interactive: true,
                title: '<img src="styles/legend/Recreation_4.png" /> Recreation'
            });
var format_beaches_5 = new ol.format.GeoJSON();
var features_beaches_5 = format_beaches_5.readFeatures(json_beaches_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_beaches_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_beaches_5.addFeatures(features_beaches_5);
var lyr_beaches_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_beaches_5, 
                style: style_beaches_5,
                popuplayertitle: "beaches",
                interactive: true,
                title: '<img src="styles/legend/beaches_5.png" /> beaches'
            });
var format_Parks_6 = new ol.format.GeoJSON();
var features_Parks_6 = format_Parks_6.readFeatures(json_Parks_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parks_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parks_6.addFeatures(features_Parks_6);
var lyr_Parks_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Parks_6, 
                style: style_Parks_6,
                popuplayertitle: "Parks",
                interactive: true,
                title: '<img src="styles/legend/Parks_6.png" /> Parks'
            });
var format_Apartments_7 = new ol.format.GeoJSON();
var features_Apartments_7 = format_Apartments_7.readFeatures(json_Apartments_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Apartments_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Apartments_7.addFeatures(features_Apartments_7);
var lyr_Apartments_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Apartments_7, 
                style: style_Apartments_7,
                popuplayertitle: "Apartments",
                interactive: true,
                title: '<img src="styles/legend/Apartments_7.png" /> Apartments'
            });
var format_PrivateListings_8 = new ol.format.GeoJSON();
var features_PrivateListings_8 = format_PrivateListings_8.readFeatures(json_PrivateListings_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PrivateListings_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PrivateListings_8.addFeatures(features_PrivateListings_8);
var lyr_PrivateListings_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PrivateListings_8, 
                style: style_PrivateListings_8,
                popuplayertitle: "Private Listings",
                interactive: true,
                title: '<img src="styles/legend/PrivateListings_8.png" /> Private Listings'
            });

lyr_SkyMap_0.setVisible(true);lyr_SkyMapMarker_1.setVisible(true);lyr_Google_2.setVisible(true);lyr_Prices_3.setVisible(true);lyr_Recreation_4.setVisible(true);lyr_beaches_5.setVisible(true);lyr_Parks_6.setVisible(true);lyr_Apartments_7.setVisible(true);lyr_PrivateListings_8.setVisible(true);
var layersList = [lyr_SkyMap_0,lyr_SkyMapMarker_1,lyr_Google_2,lyr_Prices_3,lyr_Recreation_4,lyr_beaches_5,lyr_Parks_6,lyr_Apartments_7,lyr_PrivateListings_8];
lyr_Recreation_4.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GMID': 'GMID', 'Dataset': 'Dataset', 'Facility_Name': 'Facility_Name', 'Address': 'Address', '數據集': '數據集', '設施名稱': '設施名稱', '地址': '地址', 'District': 'District', '地區': '地區', 'Facility_Type': 'Facility_Type', '設施種類': '設施種類', 'Website': 'Website', 'x': 'x', 'y': 'y', });
lyr_beaches_5.set('fieldAliases', {'OBJECTID': 'OBJECTID', 'GMID': 'GMID', 'Dataset': 'Dataset', 'Facility Name': 'Facility Name', 'Address': 'Address', '數據集': '數據集', '設施名稱': '設施名稱', '地址': '地址', 'District': 'District', '地區': '地區', 'Facility Type': 'Facility Type', '設施種類': '設施種類', 'Website': 'Website', 'x': 'x', 'y': 'y', });
lyr_Parks_6.set('fieldAliases', {'X': 'X', 'Y': 'Y', 'CP_En': 'CP_En', 'CP_Ch': 'CP_Ch', });
lyr_Apartments_7.set('fieldAliases', {'Name': 'Name', 'Type of Rent': 'Type of Rent', 'Type of housing': 'Type of housing', 'Min Rent': 'Min Rent', 'Max Rent': 'Max Rent', 'Average Rent': 'Average Rent', 'Period': 'Period', 'Usable Area': 'Usable Area', 'Length of walk to subway station': 'Length of walk to subway station', 'Subway Station': 'Subway Station', 'x': 'x', 'y': 'y', });
lyr_PrivateListings_8.set('fieldAliases', {'Name': 'Name', 'Type': 'Type', 'Type of housing': 'Type of housing', 'Rent Money': 'Rent Money', 'Period': 'Period', 'Useful area': 'Useful area', 'Time': 'Time', 'Subway': 'Subway', 'x': 'x', 'y': 'y', });
lyr_Recreation_4.set('fieldImages', {'OBJECTID': 'Range', 'GMID': 'TextEdit', 'Dataset': 'Hidden', 'Facility_Name': 'TextEdit', 'Address': 'TextEdit', '數據集': 'TextEdit', '設施名稱': 'TextEdit', '地址': 'TextEdit', 'District': 'TextEdit', '地區': 'TextEdit', 'Facility_Type': 'Hidden', '設施種類': 'TextEdit', 'Website': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_beaches_5.set('fieldImages', {'OBJECTID': 'Range', 'GMID': 'TextEdit', 'Dataset': 'TextEdit', 'Facility Name': 'TextEdit', 'Address': 'TextEdit', '數據集': 'TextEdit', '設施名稱': 'TextEdit', '地址': 'TextEdit', 'District': 'TextEdit', '地區': 'TextEdit', 'Facility Type': 'TextEdit', '設施種類': 'TextEdit', 'Website': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Parks_6.set('fieldImages', {'X': 'TextEdit', 'Y': 'TextEdit', 'CP_En': 'TextEdit', 'CP_Ch': 'TextEdit', });
lyr_Apartments_7.set('fieldImages', {'Name': 'TextEdit', 'Type of Rent': 'TextEdit', 'Type of housing': 'TextEdit', 'Min Rent': 'TextEdit', 'Max Rent': 'TextEdit', 'Average Rent': 'Range', 'Period': 'TextEdit', 'Usable Area': 'TextEdit', 'Length of walk to subway station': 'Range', 'Subway Station': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_PrivateListings_8.set('fieldImages', {'Name': 'TextEdit', 'Type': 'TextEdit', 'Type of housing': 'TextEdit', 'Rent Money': 'Range', 'Period': 'TextEdit', 'Useful area': 'Range', 'Time': 'Range', 'Subway': 'TextEdit', 'x': 'TextEdit', 'y': 'TextEdit', });
lyr_Recreation_4.set('fieldLabels', {'OBJECTID': 'no label', 'GMID': 'no label', 'Facility_Name': 'inline label - always visible', 'Address': 'inline label - always visible', '數據集': 'inline label - always visible', '設施名稱': 'inline label - always visible', '地址': 'inline label - always visible', 'District': 'inline label - always visible', '地區': 'inline label - always visible', '設施種類': 'inline label - always visible', 'Website': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_beaches_5.set('fieldLabels', {'OBJECTID': 'no label', 'GMID': 'no label', 'Dataset': 'no label', 'Facility Name': 'inline label - always visible', 'Address': 'inline label - always visible', '數據集': 'inline label - always visible', '設施名稱': 'inline label - always visible', '地址': 'inline label - always visible', 'District': 'inline label - always visible', '地區': 'inline label - always visible', 'Facility Type': 'inline label - always visible', '設施種類': 'inline label - always visible', 'Website': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_Parks_6.set('fieldLabels', {'X': 'no label', 'Y': 'no label', 'CP_En': 'no label', 'CP_Ch': 'no label', });
lyr_Apartments_7.set('fieldLabels', {'Name': 'inline label - always visible', 'Type of Rent': 'inline label - always visible', 'Type of housing': 'inline label - always visible', 'Min Rent': 'inline label - always visible', 'Max Rent': 'inline label - always visible', 'Average Rent': 'inline label - always visible', 'Period': 'inline label - always visible', 'Usable Area': 'inline label - always visible', 'Length of walk to subway station': 'inline label - always visible', 'Subway Station': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_PrivateListings_8.set('fieldLabels', {'Name': 'inline label - always visible', 'Type': 'inline label - always visible', 'Type of housing': 'inline label - always visible', 'Rent Money': 'inline label - always visible', 'Period': 'inline label - always visible', 'Useful area': 'inline label - always visible', 'Time': 'inline label - always visible', 'Subway': 'inline label - always visible', 'x': 'inline label - always visible', 'y': 'inline label - always visible', });
lyr_PrivateListings_8.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});