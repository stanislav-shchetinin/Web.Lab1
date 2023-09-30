<?php
class HtmlTable
{
    private Parameters $param;
    private bool $result;
    private string $table;
    public function __construct($param, $result, $scriptRunningTime)
    {
        $this->param = $param;

        $this->table = '<tr>';
        foreach ($this->param->getArrayParameters() as $item) {
            $this->table.='<td>'.$item.'</td>';
        }
        $this->table.='<td>'.($result ? "1" : "0").'</td>';
        $this->table.='<td>'.($scriptRunningTime).'</td>';
        $this->table.= '</tr>';

    }
    public function __toString() : string{
        return $this->table;
    }
}