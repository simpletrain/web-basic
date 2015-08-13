$('#submit').on('click',function(){
    if($('#class_name').val() && $('#id_number').val() && $('#student_name').val()){
        $('#form').submit();
    } else {
        $('#modal').modal('show');
    }
});