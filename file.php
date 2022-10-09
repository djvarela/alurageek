<?php
$dir_subida = './archivos';
$fichero_subido = $dir_subida . basename($_FILES['fichero_usuario']['name']);

echo '<pre>';
if (move_uploaded_file($_FILES['fichero_usuario']['tmp_name'], $fichero_subido)) {
    echo "El fichero es válido y se subió con éxito.\n";
} else {
    echo "¡no subio\n";
}

echo 'Más información de depuración:';
print_r($_FILES);

print "</pre>";

?>