<?php if ( ! defined('BASEPATH')) exit('No direct script access allowed');

class Welcome extends CI_Controller {

	
	public function index()
	{
		$this->load->helper('url');
		$this->load->library('user_agent');

		
		if ($this->agent->is_browser())
		{
			if ($this->agent->is_mobile())
			{
				$this->load->view('greentea_mobile');
			}else{
				$this->load->view('greentea_desktop');
			}
		}
		else{
			$this->load->view('greentea_desktop');
		}
	}
}

/* End of file welcome.php */
/* Location: ./application/controllers/welcome.php */