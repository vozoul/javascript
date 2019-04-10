console.log("exercice 7");

function getData() {
    return data; // data is defined in DATA.js file
}

$(document).ready(function () {

    //je visionne la BDD
    $('#showDb').on('click', function () {
        $('tbody').html('');
        $(getData()).each(function (index, item) {
            addLine(item);
        });
    });

    //je recherche dans la BDD
    $('#search').on('click', function () {
        seek();
    })

    $(document).on('keydown', function (key) {
        if (key.keyCode == 13) { // KeyCode de la touche entrée
            window.alert('Hey ! Tu as appuyé sur la touche entrée !!');
        }
    })

    //fonction d'ajout de ligne
    function addLine(item) {
        var $tableItem = [];
        var $tr = $('<tr>');
        for (var key in item) {
            if (key === 'name') {
                for (var subKey in item.name) {
                    $tr.append('<td>' + item.name[subKey] + '</td>');
                }
            } else {
                $tr.append('<td>' + item[key] + '</td>');
            }
        }
        $tableItem.push(item);
        if ($tableItem.indexOf(item) != -1) {
            $('tbody').append($tr);
        }
    }

    //fonction de recherche
    function seek() {
        $('tbody').html('');
        var seeking = $('#searchInput').val();
        var regex = new RegExp('(^' + seeking + ')+(.*)+', 'gi')
        $(getData()).each(function (index, item) {
            for (var key in item) {
                $value1 = item[key];
                if (regex.test($value1) === true) {
                    addLine(item);
                }
                if (key === 'name') {
                    for (var subKey in item.name) {
                        $value2 = item.name[subKey];
                        if (regex.test($value2) === true) {
                            addLine(item);
                        }
                    }
                }
            }
        })
    }


    $('.maxRows').on('click', function () {
        $('.pagination').html('');
        var maxRows = parseInt($(this).data('value'));
        var numLine = 0;
        var totalRows = $('tbody tr').length;
        $('tbody tr').each(function () {
            numLine++;
            if (numLine > maxRows) {
                $(this).hide();
            }
            if (numLine < maxRows) {
                $(this).show();
            }
        })
        if (totalRows > maxRows) {
            var numPage = Math.ceil(totalRows / maxRows)
            for (var i = 1; i <= numPage;) {
                $('.pagination').append('<li class="page-item" data-page="' + i + '"><a href="#" class="page-link">' + i++ + '</a></li>').show()
            }
        }
        $('.pagination li:first-child').addClass('active');
        $('.pagination li').on('click', function () {
            var numPage = $(this).data('page');
            var lineIndex = 0;
            $('.pagination li').removeClass('active')
            $('tbody tr').each(function () {
                lineIndex++;
                if (lineIndex > (maxRows * numPage) || lineIndex < ((maxRows * numPage) - maxRows)) {
                    $(this).hide();
                } else {
                    $(this).show();
                }
            })
        })
    });

});

