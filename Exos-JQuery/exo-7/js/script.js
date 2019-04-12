console.log("exercice 7");

var $trItem = [];
var $addedItems = [];
var $deleted = [];
var $totalData = data.concat($addedItems)
var $source = $totalData
var $id = lastId();

$(document).ready(function () {

    $('table').show();
    $('#register').hide();

    //je visionne la BDD
    $('#showDb').on('click', function () {
        $('.table').show();
        $('.pagination').show();
        $('#showForm').removeClass('active');
        $('#register').hide();
        $(this).addClass('active');
        $('tbody').html('');
        $($source).each(function (index, item) {
            addLine(item);
        });
        pagin();
    });

    //affichage formulaire
    $('#showForm').on('click', function () {
        $('.table').hide()
        $('.pagination').hide()
        $('#showDb').removeClass('active');
        $('#register').show()
        $(this).addClass('active');
    });

    //lancement du tri
    $('tr a.sort').on('click', function () {
        var $sortBy = $(this).data('sort');
        sorting($sortBy);
        pagin();
    });

    //je recherche dans la BDD
    $('#search').on('click', function () {
        seek();
        pagin();
    })

    //Pagination
    $('.maxRows').on('click', function () {
        $('.maxRows').removeClass('active');
        $(this).addClass('active');
        $maxRows = parseInt($(this).data('value'));
        pagin();
    });

    //Ajout d'un enregistrement
    $('#addEntry').on('click', function () {
        register();
    });
});

//lastId
function lastId() {
    return parseInt($source.slice(-1)[0].id);
}

//fonction d'ajout de ligne
function addLine(item) {
    if($deleted.indexOf(item.id) == -1){
        var $tr = $('<tr>');
        $del = $tr.append('<td class="del"><a href="#" class="text-danger"  data-del="'+item.id+'"><i class="fas fa-times"></i></a></td>')
        //suppression d'une ligne
        $del.on('click', function(){
            $deleted.push(item.id);
            $(this).remove();
        });
        for (var key in item) {
            if (key === 'name') {
                for (var subKey in item.name) {
                    $tr.append('<td class="' + subKey + '">' + item.name[subKey] + '</td>');
                }
            } else {
                $tr.append('<td class="' + key + '">' + item[key] + '</td>');
            }
        }
    }
    $('tbody').append($tr);
}

//Fonction de recherche
function seek() {
    $('tbody').html('');
    var $seekTable = $source;
    var seeking = $('#searchInput').val();
    var regex = new RegExp('(^' + seeking + ')+(.*)+', 'gi')
    var $resultTable = [];
    $($seekTable).each(function (index, item) {
        for (var key in item) {
            $value1 = item[key];
            if (regex.test($value1) === true) {
                $resultTable.push(item)
            }
            if (key === 'name') {
                for (var subKey in item.name) {
                    $value2 = item.name[subKey];
                    if (regex.test($value2) === true) {
                        $resultTable.push(item)
                    }
                }
            }
        }
        if($resultTable.indexOf(item) != -1){
            addLine(item);
        }
    })
}

//tri
var $sens = false;

function sorting(sortBy) {
    if ($lastSortBy !== sortBy) {
        $sens = false
    }
    $lastSortBy = sortBy;
    $('tbody').html('');
    var intRegex = /^\d+$/;
    var $sortTable;
    var $sorting = $trItem;
    $sortTable = $sorting.sort(function (a, b) {
        if (sortBy === 'first' || sortBy === 'last') {
            a = a.name;
            b = b.name
        }
        if ($sens === false) {
            if (intRegex.test(a[sortBy])) {
                return a[sortBy] - b[sortBy];
            } else {
                return (a[sortBy]).localeCompare(b[sortBy]);
            }
        } else {
            if (intRegex.test(a[sortBy])) {
                return b[sortBy] - a[sortBy];
            } else {
                return (b[sortBy]).localeCompare(a[sortBy]);
            }
        }
    })
    $trItem = [];
    $($sortTable).each(function (index, item) {
        addLine(item)
    });
    if ($sens === true) {
        $sens = false
    } else {
        $sens = true
    }
    ;
}

//pagination
var $maxRows;

function pagin() {
    $('.pagination').html('');
    maxRows = $maxRows;
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
        $(this).addClass('active')
        $('tbody tr').each(function () {
            lineIndex++;
            if (lineIndex > (maxRows * numPage) || lineIndex < ((maxRows * numPage) - maxRows)) {
                $(this).hide();
            } else {
                $(this).show();
            }
        })
    })
}

function register() {
    $id++;
    var $inner = $('#register input');
    var $errors = 0;
    var $regInput = {
        "id": ($id),
        "name": {
            "first": $('#register input#first').val(),
            "last": $('#register input#last').val(),
        },
        "email": $('#register input#email').val(),
        "gender": $('#register input#gender').val(),
        "phone": $('#register input#phone').val(),
        "country": $('#register input#country').val(),
    };
    $inner.each(function (index, item) {
        if ($(item).val() === '') {
            $errors++;
        }
    })
    if ($errors > 0) {
        window.alert('Veuillez remplir tous les champs.')
    } else {
        $addedItems.push($regInput);
        $('#register input').val('');
        $source = data.concat($addedItems)
    }
}