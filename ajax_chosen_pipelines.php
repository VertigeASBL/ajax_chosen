<?php
/**
 * Utilisations de pipelines par Ajax Chosen
 *
 * @plugin     Ajax Chosen
 * @copyright  2014
 * @author     Michel @ Vertige ASBL
 * @licence    GNU/GPL
 * @package    SPIP\Ajax_chosen\Pipelines
 */

if (!defined('_ECRIRE_INC_VERSION')) return;

function ajax_chosen_jquery_plugins ($scripts) {

    $scripts[] = 'lib/ajax-chosen/lib/ajax-chosen.min.js';
    $scripts[] = 'javascript/spip_ajax_chosen.js';

    return $scripts;
}