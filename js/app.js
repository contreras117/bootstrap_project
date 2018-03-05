const $form = $('#suscribe-form')
const $formGroup = $form.find('.form-group')
const $formControl = $formGroup.find('.form-control')

$form.submit(function (ev){
  ev.preventDefault()
  
  const error = Math.random() > 0.5
  $formControl.removeClass().addClass('form-control')
  $formGroup.find('.form-control-feedback').remove()

  var el;
  if (error)
  {
    el = $('<div>', {html: 'Ha ocurrido un error'})
    el.addClass('invalid-feedback')
    $formControl.addClass('is-invalid')

  }
  else
  {
    el = $('<div>', {html: 'Te enviaremos todas las novedades'})
    el.addClass('valid-feedback')
    $formControl.addClass('is-valid')
  }

  el.addClass('form-control-feedback')
  $formGroup.append(el)
})