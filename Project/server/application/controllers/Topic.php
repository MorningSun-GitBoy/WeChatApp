<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Topic extends CI_Controller
{
    public function getTopic()
    {
        $this -> load -> model('topic_model');
        $result = $this ->topic_model->getList();
        echo json_encode($result);
    }
}