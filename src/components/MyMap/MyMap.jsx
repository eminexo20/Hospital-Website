import React from 'react'
import { GoogleMap, useJsApiLoader, Marker } from '@react-google-maps/api'

const containerStyle = {
  width: '100%',
  height: '400px'
}

const center = {
  lat: 40.4058, // Göygöl koordinatları
  lng: 46.5735
}

function Mymap() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: 'SƏNİN_API_AÇARIN' // Buraya öz Google Maps API açarını yaz
  })

  const [map, setMap] = React.useState(null)

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center)
    map.fitBounds(bounds)
    setMap(map)
  }, [])

  const onUnmount = React.useCallback(() => {
    setMap(null)
  }, [])

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={14}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >
      {/* Marker əlavə olundu */}
      <Marker position={center} />
    </GoogleMap>
  ) : (
    <div>Xəritə yüklənir...</div>
  )
}

export default React.memo(Mymap)
