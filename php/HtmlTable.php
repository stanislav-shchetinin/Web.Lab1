<?php
class HtmlTable
{
    private Parameters $param;
    private bool $result;
    private string $table;
    public function __construct($param, $result)
    {
        $this->param = $param;

        $this->table = '<table><tr>';
        foreach ($this->param->getArrayParameters() as $item) {
            $this->table.='<td>'.$item.'</td>';
        }
        $this->table.='<td>'.($result ? "1" : "0").'</td>';
        $this->table.= '</tr><table>';

    }
    public function __toString() : string{
        return $this->table;
    }
}